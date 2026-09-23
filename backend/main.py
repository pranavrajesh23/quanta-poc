from dotenv import load_dotenv
load_dotenv()

import os
import logging
from fastapi import FastAPI, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from databricks import sql
from databricks.sdk.core import Config

cfg = Config()

def get_connection(user_token: str):
    return sql.connect(
        server_hostname=cfg.host,
        http_path=f"/sql/1.0/warehouses/{os.getenv('DATABRICKS_WAREHOUSE_ID')}",
        access_token=user_token,
    )

def resolve_user_token(request: Request) -> str:
    """
    Returns the signed-in user's own access token (OBO), forwarded by
    Databricks' app gateway in production. Locally, that header doesn't
    exist, so we fall back to a personal token from .env -- but only if
    LOCAL_DEV is explicitly set, so this can never silently activate in
    a deployed environment.
    """
    user_token = request.headers.get("x-forwarded-access-token")

    if not user_token:
        if os.getenv("LOCAL_DEV") == "true":
            user_token = os.getenv("DATABRICKS_TOKEN")
            logger.info("LOCAL_DEV active — using DATABRICKS_TOKEN from .env instead of OBO header")
        else:
            raise HTTPException(status_code=401, detail="Missing user authorization token")

    if not user_token:
        raise HTTPException(status_code=401, detail="No valid Databricks token available")

    return user_token

# --- Logging Setup ---
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)
logger = logging.getLogger(__name__)

app = FastAPI(title="Quanta Bakehouse Dashboard")

# --- API Routes ---
@app.get("/api/health")
async def health_check():
    logger.info("Health check at /api/health")
    return {"status": "healthy"}

@app.get("/api/sales-sample")
async def sales_sample(request: Request):
    logger.info("Sales sample requested at /api/sales-sample")
    user_token = resolve_user_token(request)

    query = "SELECT * FROM samples.bakehouse.sales_transactions LIMIT 500"
    with get_connection(user_token) as connection:
        with connection.cursor() as cursor:
            cursor.execute(query)
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
    return {"columns": columns, "rows": data}

# --- Static Files Setup ---
static_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static")
os.makedirs(static_dir, exist_ok=True)

app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")

# --- Catch-all for React Routes ---
@app.get("/{full_path:path}")
async def serve_react(full_path: str):
    index_html = os.path.join(static_dir, "index.html")
    if os.path.exists(index_html):
        logger.info(f"Serving React frontend for path: /{full_path}")
        return FileResponse(index_html)
    logger.error("Frontend not built. index.html missing.")
    raise HTTPException(
        status_code=404,
        detail="Frontend not built. Please run 'npm run build' first."
    )
import './ChartCard.css'

export function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="chart-card">
      <div className="drag-handle">
        <h3>{title}</h3>
      </div>
      <div className="chart-body">{children}</div>
    </div>
  )
}
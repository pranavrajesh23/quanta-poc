import { useEffect, useState } from 'react'

type SalesResponse = { columns: string[]; rows: Record<string, any>[] }

export function useSalesData() {
  const [data, setData] = useState<SalesResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/sales-sample')
      .then(res => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        return res.json()
      })
      .then(json => {
        setData(json)
        console.log('Bakehouse columns:', json.columns)   // check this once, then match names below
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
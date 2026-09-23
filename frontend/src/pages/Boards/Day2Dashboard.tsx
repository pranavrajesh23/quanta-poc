import { useSalesData } from '../../hooks/useSalesData'
import { groupSumBy } from '../../utils/aggregate'
import { useFilters } from '../../context/FilterContext/FilterContext'
import { ChartCard } from '../../components/charts/ChartCard/ChartCard'
import { StatCard } from '../../components/charts/StatCard/StatCard'
import { BarChartWidget } from '../../components/charts/BarChart'
import { PieChartWidget } from '../../components/charts/PieChart'
import { FilterBar } from '../../components/filters/FilterBar/FilterBar'
import { DataTable } from '../../components/tables/DataTable/DataTable'
import '../styles/Day2Dashboard.css'

export function Day2Dashboard() {
  const { data, loading, error } = useSalesData()
  const { selectedYear, selectedProducts } = useFilters()

  if (loading) return <p>Loading bakehouse data…</p>
  if (error) return <p>Error: {error}</p>
  if (!data) return null

  const GROUP_COLUMN = 'product'
  const VALUE_COLUMN = 'totalPrice'

  const years = Array.from(new Set(data.rows.map(r => String(r.dateTime).slice(0, 4))))
  const products = Array.from(new Set(data.rows.map(r => String(r[GROUP_COLUMN]))))

  const filteredRows = data.rows.filter(row => {
    const rowYear = String(row.dateTime).slice(0, 4)
    const yearMatch = !selectedYear || rowYear === selectedYear
    const productMatch = selectedProducts.length === 0 || selectedProducts.includes(row[GROUP_COLUMN])
    return yearMatch && productMatch
  })

  const grouped = groupSumBy(filteredRows, GROUP_COLUMN, VALUE_COLUMN)

  return (
    <>
      <FilterBar years={years} products={products} />
      <div className="dashboard-grid">
        <h2 className="full-width">Day 2 — Live Bakehouse Data</h2>

        <StatCard label="Rows (Filtered)" value={filteredRows.length} />
        <StatCard label={`Distinct ${GROUP_COLUMN}`} value={grouped.labels.length} />

        <ChartCard title={`${VALUE_COLUMN} by ${GROUP_COLUMN} (Bar)`}>
          <BarChartWidget labels={grouped.labels} values={grouped.values} label={VALUE_COLUMN} />
        </ChartCard>

        <ChartCard title={`${VALUE_COLUMN} by ${GROUP_COLUMN} (Pie)`}>
          <PieChartWidget labels={grouped.labels} values={grouped.values} />
        </ChartCard>

        <div className="chart-card full-width">
          <h3>All Sample Rows ({filteredRows.length})</h3>
          <DataTable columns={data.columns} rows={filteredRows} />
        </div>
      </div>
    </>
  )
}
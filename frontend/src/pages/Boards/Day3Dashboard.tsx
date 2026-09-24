import { useSalesData } from '../../hooks/useSalesData'
import { groupSumBy } from '../../utils/aggregate'
import { useFilters } from '../../context/FilterContext/FilterContext'
import { BarChartWidget } from '../../components/charts/BarChart'
import { PieChartWidget } from '../../components/charts/PieChart'
import { FilterBar } from '../../components/filters/FilterBar/FilterBar'
import { DataTable } from '../../components/tables/DataTable/DataTable'
import '../styles/Day3Dashboard.css'

export function Day3Dashboard() {
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
      <h2 className="d3-title">Day 3 — Fixed Layout</h2>

      <div className="d3-grid">
        <div className="d3-cell d3-stat1">
          <p className="d3-stat-label">Rows (Filtered)</p>
          <p className="d3-stat-value">{filteredRows.length}</p>
        </div>

        <div className="d3-cell d3-stat2">
          <p className="d3-stat-label">Distinct {GROUP_COLUMN}</p>
          <p className="d3-stat-value">{grouped.labels.length}</p>
        </div>

        <div className="d3-cell d3-bar">
          <h3 className="d3-cell-title">{VALUE_COLUMN} by {GROUP_COLUMN} (Bar)</h3>
          <div className="d3-chart-body">
            <BarChartWidget labels={grouped.labels} values={grouped.values} label={VALUE_COLUMN} />
          </div>
        </div>

        <div className="d3-cell d3-pie">
          <h3 className="d3-cell-title">{VALUE_COLUMN} by {GROUP_COLUMN} (Pie)</h3>
          <div className="d3-chart-body">
            <PieChartWidget labels={grouped.labels} values={grouped.values} />
          </div>
        </div>

        <div className="d3-cell d3-table">
          <h3 className="d3-cell-title">All Sample Rows ({filteredRows.length})</h3>
          <DataTable columns={data.columns} rows={filteredRows} />
        </div>
      </div>
    </>
  )
}
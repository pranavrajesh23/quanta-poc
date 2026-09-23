import { useFilters } from '../../../context/FilterContext/FilterContext'
import { MultiSelectDropdown } from '../MultiSelectDropDown/MultiSelectDropDown';
import './FilterBar.css'

export function FilterBar({ years, products }: { years: string[]; products: string[] }) {
  const { selectedYear, setSelectedYear, selectedProducts, setSelectedProducts } = useFilters()

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Year</label>
        <select value={selectedYear ?? ''} onChange={e => setSelectedYear(e.target.value || null)}>
          <option value="">All</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>

      <MultiSelectDropdown label="Product" options={products} selected={selectedProducts} onChange={setSelectedProducts} />
    </div>
  )
}
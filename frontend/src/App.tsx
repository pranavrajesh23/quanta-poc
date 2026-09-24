import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/layout/Layout/Layout'
import { Dashboard } from './pages/Boards/Dashboard'
import { Day2Dashboard } from './pages/Boards/Day2Dashboard'
import { Day3Dashboard } from './pages/Boards/Day3Dashboard'
import { FilterProvider } from './context/FilterContext/FilterContext'
import './App.css'

function App() {
  return (
    <FilterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/day1" replace />} />
            <Route path="day1" element={<Dashboard />} />
            <Route path="day2" element={<Day2Dashboard />} />
            <Route path="day3" element={<Day3Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  )
}

export default App
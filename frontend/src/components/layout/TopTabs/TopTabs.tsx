import { NavLink } from 'react-router-dom'
import './TopTabs.css'

const pages = [
  { path: '/day1', label: 'Overview' },
  { path: '/day2', label: 'Bakehouse Live (Draggable)' },
  { path: '/day3', label: 'Bakehouse Live (Fixed)' },
]

export function TopTabs() {
  return (
    <nav className="top-tabs">
      {pages.map(page => (
        <NavLink
          key={page.path}
          to={page.path}
          className={({ isActive }) => `top-tab${isActive ? ' active' : ''}`}
        >
          {page.label}
        </NavLink>
      ))}
    </nav>
  )
}
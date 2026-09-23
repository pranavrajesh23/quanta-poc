import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { TopTabs } from '../TopTabs/TopTabs'
import './Layout.css'

export function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <TopTabs />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}
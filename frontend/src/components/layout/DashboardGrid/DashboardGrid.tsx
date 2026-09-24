import { useState, useCallback, useEffect, useRef, ReactNode } from 'react'
import * as RGLNamespace from 'react-grid-layout'
import type { Layout } from 'react-grid-layout'
import './DashboardGrid.css'

const GridLayout: any = (RGLNamespace as any).GridLayout ?? (RGLNamespace as any).default

type DashboardGridProps = {
  storageKey: string
  defaultLayout: Layout
  children: ReactNode
}

export function DashboardGrid({ storageKey, defaultLayout, children }: DashboardGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width)
      }
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const [layout, setLayout] = useState<Layout>(() => {
    const saved = localStorage.getItem(storageKey)
    return saved ? JSON.parse(saved) : defaultLayout
  })

  const handleLayoutChange = useCallback((newLayout: Layout) => {
    setLayout(newLayout)
    localStorage.setItem(storageKey, JSON.stringify(newLayout))
  }, [storageKey])

  return (
    <div ref={containerRef} className="dashboard-grid-container">
      <GridLayout
        className="dashboard-grid-dnd"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={width}
        margin={[12, 12]}
        onLayoutChange={handleLayoutChange}
        draggableHandle=".drag-handle"
        isDraggable={true}
        isResizable={true}
      >
        {children}
      </GridLayout>
    </div>
  )
}
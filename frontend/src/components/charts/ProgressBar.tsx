// components/charts/ProgressBar.tsx
type ProgressBarProps = { label: string; value: number; max?: number }

export function ProgressBar({ label, value, max = 100 }: ProgressBarProps) {
  const pct = Math.min((value / max) * 100, 100)
  return (
    <div className="chart-card">
      <p className="stat-label">{label}</p>
      <div style={{ background: '#eee', borderRadius: 8, height: 12, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, background: '#36B37E', height: '100%' }} />
      </div>
      <p className="stat-label">{value} / {max}</p>
    </div>
  )
}
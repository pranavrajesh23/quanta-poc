// components/charts/ScatterChart.tsx
import { Scatter } from 'react-chartjs-2'

type ScatterPoint = { x: number; y: number }
type ScatterChartProps = { points: ScatterPoint[]; label?: string }

export function ScatterChartWidget({ points, label = 'Dataset' }: ScatterChartProps) {
  const data = { datasets: [{ label, data: points, backgroundColor: '#FF5630' }] }
  return <Scatter data={data} />
}
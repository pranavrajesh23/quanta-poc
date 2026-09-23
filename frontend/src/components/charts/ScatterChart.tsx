// ScatterChart.tsx
import { Scatter } from 'react-chartjs-2'
import { cartesianChartOptions } from './chartOptions'

export function ScatterChartWidget({ points, label = 'Dataset' }: { points: { x: number; y: number }[]; label?: string }) {
  const data = { datasets: [{ label, data: points, backgroundColor: '#FF5630' }] }
  return <Scatter data={data} options={cartesianChartOptions} />
}
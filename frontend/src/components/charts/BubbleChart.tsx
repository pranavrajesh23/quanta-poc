// BubbleChart.tsx
import { Bubble } from 'react-chartjs-2'
import { cartesianChartOptions } from './chartOptions'

export function BubbleChartWidget({ points, label = 'Dataset' }: { points: { x: number; y: number; r: number }[]; label?: string }) {
  const data = { datasets: [{ label, data: points, backgroundColor: '#4C9AFF' }] }
  return <Bubble data={data} options={cartesianChartOptions} />
}
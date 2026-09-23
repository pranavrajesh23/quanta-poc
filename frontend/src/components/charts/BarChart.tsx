// BarChart.tsx
import { Bar } from 'react-chartjs-2'
import { cartesianChartOptions } from './chartOptions'

export function BarChartWidget({ labels, values, label = 'Value' }: { labels: string[]; values: number[]; label?: string }) {
  const data = { labels, datasets: [{ label, data: values, backgroundColor: '#4C9AFF' }] }
  return <Bar data={data} options={cartesianChartOptions} />
}
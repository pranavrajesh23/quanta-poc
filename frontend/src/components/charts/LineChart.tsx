// LineChart.tsx
import { Line } from 'react-chartjs-2'
import { cartesianChartOptions } from './chartOptions'

export function LineChartWidget({ labels, values, label = 'Value' }: { labels: string[]; values: number[]; label?: string }) {
  const data = { labels, datasets: [{ label, data: values, borderColor: '#36B37E', tension: 0.3 }] }
  return <Line data={data} options={cartesianChartOptions} />
}
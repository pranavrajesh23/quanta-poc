// StackedBarChart.tsx
import { Bar } from 'react-chartjs-2'
import { cartesianChartOptions } from './chartOptions'

export function StackedBarChartWidget({ labels, series }: { labels: string[]; series: { label: string; values: number[]; color: string }[] }) {
  const data = { labels, datasets: series.map(s => ({ label: s.label, data: s.values, backgroundColor: s.color })) }
  const options = { ...cartesianChartOptions, scales: { x: { stacked: true }, y: { stacked: true } } }
  return <Bar data={data} options={options} />
}
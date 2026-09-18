// components/charts/StackedBarChart.tsx
import { Bar } from 'react-chartjs-2'

type StackedBarChartProps = { labels: string[]; series: { label: string; values: number[]; color: string }[] }

export function StackedBarChartWidget({ labels, series }: StackedBarChartProps) {
  const data = { labels, datasets: series.map(s => ({ label: s.label, data: s.values, backgroundColor: s.color })) }
  const options = { scales: { x: { stacked: true }, y: { stacked: true } } }
  return <Bar data={data} options={options} />
}
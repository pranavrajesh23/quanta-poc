// DoughnutChart.tsx
import { Doughnut } from 'react-chartjs-2'
import { radialChartOptions } from './chartOptions'

export function DoughnutChartWidget({ labels, values }: { labels: string[]; values: number[] }) {
  const data = { labels, datasets: [{ data: values, backgroundColor: ['#4C9AFF', '#36B37E', '#FFAB00', '#FF5630'] }] }
  return <Doughnut data={data} options={radialChartOptions} />
}
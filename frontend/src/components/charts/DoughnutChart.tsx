// components/charts/DoughnutChart.tsx
import { Doughnut } from 'react-chartjs-2'

type DoughnutChartProps = { labels: string[]; values: number[] }

export function DoughnutChartWidget({ labels, values }: DoughnutChartProps) {
  const data = { labels, datasets: [{ data: values, backgroundColor: ['#4C9AFF', '#36B37E', '#FFAB00', '#FF5630'] }] }
  return <Doughnut data={data} />
}
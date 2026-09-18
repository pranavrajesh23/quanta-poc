// components/charts/PolarAreaChart.tsx
import { PolarArea } from 'react-chartjs-2'

type PolarAreaChartProps = { labels: string[]; values: number[] }

export function PolarAreaChartWidget({ labels, values }: PolarAreaChartProps) {
  const data = { labels, datasets: [{ data: values, backgroundColor: ['#4C9AFF', '#36B37E', '#FFAB00', '#FF5630'] }] }
  return <PolarArea data={data} />
}
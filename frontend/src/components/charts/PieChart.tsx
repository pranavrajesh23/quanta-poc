import { Pie } from 'react-chartjs-2'

type PieChartProps = {
  labels: string[]
  values: number[]
}

export function PieChartWidget({ labels, values }: PieChartProps) {
  const data = {
    labels,
    datasets: [{ data: values, backgroundColor: ['#4C9AFF', '#36B37E', '#FFAB00', '#FF5630'] }],
  }
  return <Pie data={data} />
}
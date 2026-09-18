import { Bar } from 'react-chartjs-2'

type BarChartProps = {
  labels: string[]
  values: number[]
  label?: string
}

export function BarChartWidget({ labels, values, label = 'Value' }: BarChartProps) {
  const data = {
    labels,
    datasets: [{ label, data: values, backgroundColor: '#4C9AFF' }],
  }
  return <Bar data={data} />
}
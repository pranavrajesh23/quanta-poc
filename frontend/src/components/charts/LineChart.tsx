import { Line } from 'react-chartjs-2'

type LineChartProps = {
  labels: string[]
  values: number[]
  label?: string
}

export function LineChartWidget({ labels, values, label = 'Value' }: LineChartProps) {
  const data = {
    labels,
    datasets: [{ label, data: values, borderColor: '#36B37E', tension: 0.3 }],
  }
  return <Line data={data} />
}
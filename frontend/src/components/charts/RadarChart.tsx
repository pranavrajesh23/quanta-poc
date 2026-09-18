// components/charts/RadarChart.tsx
import { Radar } from 'react-chartjs-2'

type RadarChartProps = { labels: string[]; values: number[]; label?: string }

export function RadarChartWidget({ labels, values, label = 'Value' }: RadarChartProps) {
  const data = { labels, datasets: [{ label, data: values, backgroundColor: 'rgba(76,154,255,0.3)', borderColor: '#4C9AFF' }] }
  return <Radar data={data} />
}
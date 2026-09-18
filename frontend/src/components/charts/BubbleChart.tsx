// components/charts/BubbleChart.tsx
import { Bubble } from 'react-chartjs-2'

type BubblePoint = { x: number; y: number; r: number }
type BubbleChartProps = { points: BubblePoint[]; label?: string }

export function BubbleChartWidget({ points, label = 'Dataset' }: BubbleChartProps) {
  const data = { datasets: [{ label, data: points, backgroundColor: '#4C9AFF' }] }
  return <Bubble data={data} />
}
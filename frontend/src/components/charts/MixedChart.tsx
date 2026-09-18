// components/charts/MixedChart.tsx — bar + line combined (e.g. actual vs. target)
import { Chart } from 'react-chartjs-2'

type MixedChartProps = { labels: string[]; barValues: number[]; lineValues: number[] }

export function MixedChartWidget({ labels, barValues, lineValues }: MixedChartProps) {
  const data = {
    labels,
    datasets: [
      { type: 'bar' as const, label: 'Actual', data: barValues, backgroundColor: '#4C9AFF' },
      { type: 'line' as const, label: 'Target', data: lineValues, borderColor: '#FF5630' },
    ],
  }
  return <Chart type="bar" data={data} />
}
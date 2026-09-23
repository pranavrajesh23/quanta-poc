// MixedChart.tsx
import { Chart } from 'react-chartjs-2'
import { cartesianChartOptions } from './chartOptions'

export function MixedChartWidget({ labels, barValues, lineValues }: { labels: string[]; barValues: number[]; lineValues: number[] }) {
  const data = {
    labels,
    datasets: [
      { type: 'bar' as const, label: 'Actual', data: barValues, backgroundColor: '#4C9AFF' },
      { type: 'line' as const, label: 'Target', data: lineValues, borderColor: '#FF5630' },
    ],
  }
  return <Chart type="bar" data={data} options={cartesianChartOptions} />
}
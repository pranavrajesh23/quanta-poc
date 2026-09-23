import { ChartCard } from '../../components/charts/ChartCard/ChartCard'
import { ProgressBar } from '../../components/charts/ProgressBar'
import { BarChartWidget } from '../../components/charts/BarChart'
import { StackedBarChartWidget } from '../../components/charts/StackedBarChart'
import { LineChartWidget } from '../../components/charts/LineChart'
import { PieChartWidget } from '../../components/charts/PieChart'
import { RadarChartWidget } from '../../components/charts/RadarChart'
import { PolarAreaChartWidget } from '../../components/charts/PolarAreaChart'
import { BubbleChartWidget } from '../../components/charts/BubbleChart'
import { ScatterChartWidget } from '../../components/charts/ScatterChart'
import { MixedChartWidget } from '../../components/charts/MixedChart'
import { DoughnutChartWidget } from '../../components/charts/DoughnutChart'
import { StatCard } from '../../components/charts/StatCard/StatCard'
import '../styles/Dashboard.css'

export function Dashboard() {
  return (
    <div className="dashboard-grid">
      {/* KPI row */}
      <StatCard label="Total Sales" value="$45,200" />
      <StatCard label="Franchises" value={3} />
      <ProgressBar label="Target Achieved" value={72} max={100} />

      {/* Core charts */}
      <ChartCard title="Sales by Franchise (Bar)">
        <BarChartWidget labels={['Franchise A', 'Franchise B', 'Franchise C']} values={[120, 90, 150]} />
      </ChartCard>

      <ChartCard title="Sales Trend (Line)">
        <LineChartWidget labels={['Jan', 'Feb', 'Mar', 'Apr']} values={[100, 120, 90, 140]} />
      </ChartCard>

      <ChartCard title="Category Split (Pie)">
        <PieChartWidget labels={['Bread', 'Cake', 'Coffee']} values={[40, 35, 25]} />
      </ChartCard>

      <ChartCard title="Category Split (Doughnut)">
        <DoughnutChartWidget labels={['Bread', 'Cake', 'Coffee']} values={[40, 35, 25]} />
      </ChartCard>

      {/* More chart types */}
      <ChartCard title="Franchise Sales (Stacked Bar)">
        <StackedBarChartWidget
          labels={['Q1', 'Q2', 'Q3', 'Q4']}
          series={[
            { label: 'Franchise A', values: [30, 40, 35, 50], color: '#4C9AFF' },
            { label: 'Franchise B', values: [20, 25, 30, 28], color: '#36B37E' },
          ]}
        />
      </ChartCard>

      <ChartCard title="Actual vs Target (Mixed)">
        <MixedChartWidget labels={['Jan', 'Feb', 'Mar', 'Apr']} barValues={[100, 120, 90, 140]} lineValues={[110, 110, 110, 110]} />
      </ChartCard>

      <ChartCard title="Franchise Performance (Radar)">
        <RadarChartWidget labels={['Sales', 'Growth', 'Retention', 'Reviews']} values={[80, 60, 75, 90]} />
      </ChartCard>

      <ChartCard title="Category Split (Polar Area)">
        <PolarAreaChartWidget labels={['Bread', 'Cake', 'Coffee']} values={[40, 35, 25]} />
      </ChartCard>

      <ChartCard title="Order Size vs Frequency (Bubble)">
        <BubbleChartWidget points={[{ x: 10, y: 20, r: 8 }, { x: 15, y: 35, r: 15 }, { x: 25, y: 15, r: 10 }]} />
      </ChartCard>

      <ChartCard title="Price vs Rating (Scatter)">
        <ScatterChartWidget points={[{ x: 5, y: 4.2 }, { x: 8, y: 3.8 }, { x: 12, y: 4.7 }, { x: 6, y: 4.0 }]} />
      </ChartCard>
    </div>
  )
}
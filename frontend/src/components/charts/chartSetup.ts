// components/charts/chartSetup.ts
import { Chart as ChartJS, CategoryScale, LinearScale, RadialLinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, RadialLinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler)
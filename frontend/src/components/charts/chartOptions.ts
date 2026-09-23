const sharedPlugins = {
  legend: {
    position: 'bottom' as const,
    labels: { boxWidth: 10, font: { size: 10 }, padding: 8 },
  },
}

// For Bar, Line, Scatter, Bubble, StackedBar, Mixed — charts with x/y axes
export const cartesianChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: { padding: { bottom: 4 } },
  plugins: sharedPlugins,
  scales: {
    x: {
      ticks: { font: { size: 9 }, autoSkip: true, maxRotation: 40, minRotation: 40 },
    },
  },
}

// For Pie, Doughnut, Radar, PolarArea — no axes at all
export const radialChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: sharedPlugins,
}
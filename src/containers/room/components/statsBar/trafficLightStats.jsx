import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { filterTrafficLight } from './utils'

import './statsBar.scss'

const TrafficLightStats = ({ participants }) => {
  // TrafficLight ChartJS
  const red = filterTrafficLight(participants, 'red')
  const orange = filterTrafficLight(participants, 'orange')
  const green = filterTrafficLight(participants, 'green')

  const traficChartData = {
    labels: ['Red', 'Orange', 'Green'],
    datasets: [
      {
        data: [red, orange, green],
        backgroundColor: ['#FF0000', '#FF7C00', '#6C9F43'],
        hoverBackgroundColor: ['#FF0000', '#FF7C00', '#6C9F43']
      }
    ]
  }
  return (
    <div className="doughnut fade-in">
      <Doughnut
        className="fade-in-top"
        data={traficChartData}
        options={{
          maintainAspectRatio: false,
          tooltips: {
            callbacks: {
              label(tooltipItem, data) {
                const dataset = data.datasets[tooltipItem.datasetIndex]
                /* eslint no-underscore-dangle: 0 */
                const meta = dataset._meta[Object.keys(dataset._meta)[0]]
                const { total } = meta
                const currentValue = dataset.data[tooltipItem.index]
                const percentage = parseFloat(
                  ((currentValue / total) * 100).toFixed(1)
                )
                return `${currentValue} (${percentage}%)`
              },
              title(tooltipItem, data) {
                return data.labels[tooltipItem[0].index]
              }
            }
          }
        }}
      />
    </div>
  )
}

export default TrafficLightStats

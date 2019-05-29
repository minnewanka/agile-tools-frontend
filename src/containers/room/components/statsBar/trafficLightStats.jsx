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
    <div className="fade-in">
      <Doughnut className="fade-in-top" data={traficChartData} />
    </div>
  )
}

export default TrafficLightStats

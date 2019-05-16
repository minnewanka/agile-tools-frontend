import React from 'react'
import './progressBar.scss'
import { Doughnut, HorizontalBar } from 'react-chartjs-2'
import { ReactComponent as TshirtFront } from '../../../../img/tshirt-front.svg'
import {
  filterTrafficLight,
  filterPokerplanning,
  filterTshirt,
  countTshirt
} from './utils'

const ProgressBar = props => {
  const { participants, ceremony } = props

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

  // Pokerplanning ChartJS
  const pokerMaxNote = filterPokerplanning(participants, 'max')
  const pokerMinNote = filterPokerplanning(participants, 'min')

  const pokerChartData = {
    labels: ['Min', 'Max'],
    datasets: [
      {
        label: 'pokerplanning',
        backgroundColor: '#6C9F43',
        borderColor: '#6C9F43',
        borderWidth: 1,
        hoverBackgroundColor: '#6C9F43',
        hoverBorderColor: '#6C9F43',
        data: [pokerMinNote, pokerMaxNote]
      }
    ]
  }

  // Tshirt ChartJS
  const maxTshirtValue = filterTshirt(participants, 'max')
  const minTshirtValue = filterTshirt(participants, 'min')

  const tshirtNote = countTshirt(participants)
  const tshirtNoteList = Object.keys(tshirtNote).map(key => {
    return (
      <li className="li">
        {key} : {tshirtNote[key]}
      </li>
    )
  })

  const ceremonyStats = () => {
    switch (ceremony) {
      case 'trafficlight':
        return (
          <div className="fade-in">
            <Doughnut className="fade-in-top" data={traficChartData} />
          </div>
        )
      case 'tshirt':
        return (
          <div className="progressbar-container">
            <div className="tshirts fade-in-top">
              <div className="tshirt-row fade-in-top">
                <TshirtFront />
                <div className="floatTL">
                  <span className="span-tshirt-size">{minTshirtValue}</span>
                </div>
                <span className="tshirt-username">Lower</span>
              </div>
              <div className="tshirt-row fade-in-top">
                <TshirtFront />
                <div className="floatTL">
                  <span className="span-tshirt-size">{maxTshirtValue}</span>
                </div>
                <span className="tshirt-username">Higher</span>
                <div />
              </div>
            </div>
            <div className="tshirt-results">
              <ul className="ul">{tshirtNoteList}</ul>
            </div>
          </div>
        )
      default:
        return (
          <div className="fade-in">
            <HorizontalBar data={pokerChartData} />
          </div>
        )
    }
  }

  return ceremonyStats()
}

export default ProgressBar

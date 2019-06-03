import React from 'react'
import './statsBar.scss'
import CardStats from './cardStats'
import TshirtStats from './tshirtStats'
import TrafficLightStats from './trafficLightStats'

const StatsBar = props => {
  const { participants, ceremony } = props

  const ceremonyStats = () => {
    switch (ceremony) {
      case 'trafficlight':
        return <TrafficLightStats participants={participants} />
      case 'tshirt':
        return <TshirtStats participants={participants} />
      default:
        return <CardStats participants={participants} />
    }
  }

  return ceremonyStats()
}

export default StatsBar

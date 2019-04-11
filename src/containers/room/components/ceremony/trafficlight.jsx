import React from 'react'
import './trafficlight.scss'
import ReactCardFlip from 'react-card-flip'
import { ReactComponent as TrafficLightSVG } from '../../../../img/traffic_light.svg'

const TrafficLight = props => {
  const { isFlipped, vote, username } = props
  return (
    <div className="trafficlight-container">
      <TrafficLightSVG
        className={`trafficlight ${!isFlipped ? `trafficlight-${vote}` : ''}`}
      />
      <span className="username">{username}</span>
    </div>
  )
}

export default TrafficLight

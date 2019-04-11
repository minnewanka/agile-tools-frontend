import React, { Component } from 'react'
import './trafficlight.scss'
import { ReactComponent as TrafficLightSVG } from '../../../../img/traffic_light.svg'

class TrafficLight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shake: false
    }
  }

  componentDidUpdate(prevProps) {
    const { vote } = this.props
    if (vote !== prevProps.vote) {
      // setState in an if claue is OK
      /* eslint-disable react/no-did-update-set-state */
      this.setState({ shake: true })
    }
  }

  render() {
    const { isFlipped, vote, username } = this.props
    const { shake } = this.state
    return (
      <div
        className={`trafficlight-container ${
          shake && isFlipped ? 'wobble-hor-bottom' : ''
        }`}
        onAnimationEnd={() => this.setState({ shake: false })}
      >
        <TrafficLightSVG
          className={`trafficlight ${!isFlipped ? `trafficlight-${vote}` : ''}`}
        />
        <span className="username">{username}</span>
      </div>
    )
  }
}

export default TrafficLight

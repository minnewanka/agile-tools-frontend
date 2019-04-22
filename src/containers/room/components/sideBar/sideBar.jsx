/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'
import './sideBar.scss'
import ParticipantsList from './participantList'
import ProgressBar from '../progressBar/progressBar'
import { ReactComponent as LogoStats } from '../../../../img/logo-stats.svg'

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showStats: false
    }
  }

  toggleStats = () => {
    const { showStats } = this.state
    this.setState({ showStats: !showStats })
  }

  render() {
    const {
      ceremony,
      roomCode,
      roomName,
      participants,
      isFlipped,
      translate
    } = this.props

    const { showStats } = this.state
    const bstatistics = isFlipped ? null : (
      <button
        type="button"
        className="logo-icon-container"
        onClick={this.toggleStats}
      >
        <LogoStats className="logo-icon" />
      </button>
    )

    return (
      <div className="sideBarContainer">
        <div className="roomInfo">
          <div className="firstline">
            <h3 className="heading1">Room# {roomCode}</h3>
            {bstatistics}
          </div>

          <h5 className="heading2">{roomName}</h5>
          <div className="contents">
            {!isFlipped && showStats ? (
              <ProgressBar participants={participants} ceremony={ceremony} />
            ) : (
              <ParticipantsList
                participants={participants}
                isFlipped={isFlipped}
                ceremony={ceremony}
                translate={translate}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar

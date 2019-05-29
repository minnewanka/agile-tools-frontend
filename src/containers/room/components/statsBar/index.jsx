import React from 'react'
import { Consumer } from '../../../../context'
import StatsBar from './statsBar'

const StatsBarConsumer = props => (
  <Consumer>
    {({ currentRoom: { roomName, participants, isFlipped } }) => {
      return (
        <StatsBar
          roomName={roomName}
          participants={participants}
          isFlipped={isFlipped}
          {...props}
        />
      )
    }}
  </Consumer>
)

export default StatsBarConsumer

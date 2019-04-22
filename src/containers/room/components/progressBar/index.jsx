import React from 'react'
import { Consumer } from '../../../../context'
import ProgressBar from './progressBar'

const ProgressBarConsumer = props => (
  <Consumer>
    {({ currentRoom: { roomName, participants, isFlipped } }) => {
      return (
        <ProgressBar
          roomName={roomName}
          participants={participants}
          isFlipped={isFlipped}
          {...props}
        />
      )
    }}
  </Consumer>
)

export default ProgressBarConsumer

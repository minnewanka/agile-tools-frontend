import React from 'react'
import { withRouter } from 'react-router-dom'
import { Consumer } from '../../../context'
import RoomHeader from './roomHeader'

const RoomHeaderConsumer = props => (
  <Consumer>
    {({ currentRoom: { roomCode } }) => {
      return <RoomHeader roomCode={roomCode} {...props} />
    }}
  </Consumer>
)

export default withRouter(RoomHeaderConsumer)

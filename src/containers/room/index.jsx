import React from 'react'
import { withRouter } from 'react-router-dom'
import Room from './room'
import { Consumer } from '../../context'

const RoomConsumer = props => {
  return (
    <Consumer>
      {({
        currentRoom,
        setCurrentRoom,
        resetVote,
        formatMessage,
        changeCeremony
      }) => (
        <Room
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
          changeCeremony={changeCeremony}
          resetVote={resetVote}
          translate={formatMessage('room')}
          {...props}
        />
      )}
    </Consumer>
  )
}

export default withRouter(RoomConsumer)

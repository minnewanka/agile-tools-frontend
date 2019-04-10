import React from 'react'
import SideBar from './sideBar'
import { Consumer } from '../../../../context'

const SideBarConsumer = props => {
  return (
    <Consumer>
      {({ currentRoom: { roomCode, roomName, isFlipped }, formatMessage }) => (
        <SideBar
          isFlipped={isFlipped}
          roomCode={roomCode}
          roomName={roomName}
          {...props}
          translate={formatMessage('sideBar')}
        />
      )}
    </Consumer>
  )
}

export default SideBarConsumer

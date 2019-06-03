import React from 'react'
import SideBar from './sideBar'
import { Consumer } from '../../../../context'

const SideBarConsumer = props => {
  return (
    <Consumer>
      {({
        currentRoom: { roomCode, roomName, isFlipped, showStats },
        formatMessage,
        toggleStats
      }) => (
        <SideBar
          isFlipped={isFlipped}
          roomCode={roomCode}
          roomName={roomName}
          showStats={showStats}
          toggleStats={toggleStats}
          {...props}
          translate={formatMessage('sideBar')}
        />
      )}
    </Consumer>
  )
}

export default SideBarConsumer

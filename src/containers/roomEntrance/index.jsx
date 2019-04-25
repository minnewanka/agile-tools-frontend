import React from 'react'
import { withRouter } from 'react-router-dom'
import RoomEntrance from './roomEntrance'
import { Consumer } from '../../context'

const RoomEntranceConsumer = props => {
  return (
    <Consumer>
      {({ formatMessage, roomEntranceFormType }) => (
        <RoomEntrance
          translate={formatMessage('roomEntrance')}
          roomEntranceFormType={roomEntranceFormType}
          {...props}
        />
      )}
    </Consumer>
  )
}

export default withRouter(RoomEntranceConsumer)

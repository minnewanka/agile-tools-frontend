import React from 'react'
import { withRouter } from 'react-router-dom'
import CreateRoom from './createRoom'
import { Consumer } from '../../context'

const CreateRoomConsumer = props => {
  return (
    <Consumer>
      {({ formatMessage }) => (
        <CreateRoom translate={formatMessage('createRoom')} {...props} />
      )}
    </Consumer>
  )
}

export default withRouter(CreateRoomConsumer)

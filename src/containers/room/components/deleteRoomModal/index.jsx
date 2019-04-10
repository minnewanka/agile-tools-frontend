import React from 'react'
import { withRouter } from 'react-router-dom'
import DeleteRoomModal from './deleteRoomModal'
import { Consumer } from '../../../../context'

const DeleteRoomModalConsumer = props => {
  return (
    <Consumer>
      {({ formatMessage }) => (
        <DeleteRoomModal translate={formatMessage('room')} {...props} />
      )}
    </Consumer>
  )
}

export default withRouter(DeleteRoomModalConsumer)

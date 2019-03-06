import React, { Component } from 'react'
import './dashboard.scss'
import { Modal, Button, Icon } from 'react-materialize'
import { withRouter } from "react-router"
import { deleteRoom } from '../../services/roomService'

class DeleteRoomModal extends Component {

  constructor(props) {
    super(props)
    this.deleteRoomAndRedirect = this.deleteRoomAndRedirect.bind(this)
  }

  deleteRoomAndRedirect(coodeRoom) {
    deleteRoom(coodeRoom).then(() => {
      this.props.history.push({ pathname: "/"})
    })
  }

  render() {
    return (
      <Modal
        className="delete-modal"
        header={`Delete Room# ${this.props.roomCode}`}
        trigger={<Button className="red darken-2">Delete Room</Button>}
        actions={[
          <Button modal="close" waves="light" className="red darken-2" onClick={() => { this.deleteRoomAndRedirect(this.props.roomCode) }}><Icon left>delete</Icon>delete</Button>,
          <Button flat modal="close" waves="light">cancel</Button>
        ]}>
        <p>Do you really want to delete this room ?</p>
      </Modal>
    )
  }


}

export default withRouter(DeleteRoomModal)

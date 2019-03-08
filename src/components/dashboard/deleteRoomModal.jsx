import React, { Component } from 'react'
import './dashboard.scss'
import { Modal, Button, Icon } from 'react-materialize'
import { withRouter } from "react-router"
import { deleteRoom } from '../../services/roomService'
import { injectIntl, defineMessages } from "react-intl"
import { compose } from 'recompose'

const messages = defineMessages({
  buttonDelete: {
    id: 'dashboard.buttonDelete',
    defaultMessage: 'Delete Room'
  },
  buttonDeleteComfirm: {
    id: 'dashboard.buttonDeleteComfirm',
    defaultMessage: 'Delete'
  },
  headerDeleteComfirm: {
    id: 'dashboard.headerDeleteComfirm',
    defaultMessage: 'Delete Room#'
  },
  textDeleteComfirm: {
    id: 'dashboard.textDeleteComfirm',
    defaultMessage: 'Do you really want to delete this room ?'
  },
  buttonCancel: {
    id: 'dashboard.buttonCancel',
    defaultMessage: 'Cancel'
  }
})

class DeleteRoomModal extends Component {

  constructor(props) {
    super(props)
    this.deleteRoomAndRedirect = this.deleteRoomAndRedirect.bind(this)
  }

  deleteRoomAndRedirect(coodeRoom) {
    deleteRoom(coodeRoom).then(() => {
      this.props.history.push({ pathname: "/" })
    })
  }

  render() {
    const { intl: { formatMessage } } = this.props
    return (
      <Modal
        className="delete-modal"
        header={formatMessage(messages.headerDeleteComfirm) + this.props.roomCode}
        trigger={<Button className="red darken-2">{formatMessage(messages.buttonDelete)}</Button>}
        actions={[
          <Button modal="close" waves="light" className="red darken-2 " onClick={() => { this.deleteRoomAndRedirect(this.props.roomCode) }}>
            <Icon left>delete</Icon>{formatMessage(messages.buttonDeleteComfirm)}</Button>,
          <Button flat modal="close" className="cancel-button-comfirm" waves="light">{formatMessage(messages.buttonCancel)}</Button>
        ]}>
        <p>{formatMessage(messages.textDeleteComfirm)}</p>
      </Modal>
    )
  }

}


export default compose(
  withRouter,
  injectIntl
)(DeleteRoomModal)

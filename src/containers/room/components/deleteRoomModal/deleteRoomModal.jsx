import React, { Component } from 'react'
import './deleteRoomModal.scss'
import { Modal, Button } from 'react-materialize'
import { deleteRoom } from '../../../../services/roomService'

class DeleteRoomModal extends Component {
  constructor(props) {
    super(props)
    this.deleteRoomAndRedirect = this.deleteRoomAndRedirect.bind(this)
  }

  deleteRoomAndRedirect(coodeRoom) {
    const { history } = this.props
    deleteRoom(coodeRoom).then(() => {
      history.push({ pathname: '/' })
    })
  }

  render() {
    const { translate, roomCode } = this.props
    return (
      <Modal
        className="delete-modal"
        header={translate('headerDeleteComfirm') + roomCode}
        trigger={
          <button
            type="button"
            className="button-default-style delete-modal-trigger"
          >
            {translate('buttonDelete')}
          </button>
        }
        actions={
          <div className="actions-buttons-container">
            <Button
              flat
              modal="close"
              waves="light"
              className="actions-button-cancel"
            >
              {translate('buttonCancel')}
            </Button>
            <Button
              modal="close"
              waves="light"
              className="red actions-button-delete"
              onClick={() => {
                this.deleteRoomAndRedirect(roomCode)
              }}
            >
              {translate('buttonDeleteComfirm')}
            </Button>
          </div>
        }
      >
        <p>{translate('textDeleteComfirm')}</p>
      </Modal>
    )
  }
}

export default DeleteRoomModal

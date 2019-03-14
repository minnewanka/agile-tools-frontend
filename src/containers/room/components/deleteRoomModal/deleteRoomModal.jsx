import React, { Component } from "react"
import "./deleteRoomModal.scss"
import { Modal, Button, Icon } from "react-materialize"
import { deleteRoom } from "../../../../services/roomService"

class DeleteRoomModal extends Component {
  constructor(props) {
    super(props)
    this.deleteRoomAndRedirect = this.deleteRoomAndRedirect.bind(this)
  }

  deleteRoomAndRedirect(coodeRoom) {
    const { history } = this.props
    deleteRoom(coodeRoom).then(() => {
      history.push({ pathname: "/" })
    })
  }

  render() {
    const { translate, roomCode } = this.props
    return (
      <Modal
        className="delete-modal"
        header={translate("headerDeleteComfirm") + roomCode}
        trigger={
          <Button className="delete-modal-trigger red darken-2">
            {translate("buttonDelete")}
          </Button>
        }
        actions={[
          <Button
            modal="close"
            waves="light"
            className="red darken-2 "
            onClick={() => {
              this.deleteRoomAndRedirect(roomCode)
            }}
          >
            <Icon left>delete</Icon>
            {translate("buttonDeleteComfirm")}
          </Button>,
          <Button
            flat
            modal="close"
            className="cancel-button-comfirm"
            waves="light"
          >
            {translate("buttonCancel")}
          </Button>
        ]}
      >
        <p>{translate("textDeleteComfirm")}</p>
      </Modal>
    )
  }
}

export default DeleteRoomModal

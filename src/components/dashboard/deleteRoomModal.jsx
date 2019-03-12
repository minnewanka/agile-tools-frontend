import React, { Component } from "react"
import "./dashboard.scss"
import { Modal, Button, Icon } from "react-materialize"
import { withRouter } from "react-router-dom"
import { deleteRoom } from "../../services/roomService"
import { Consumer } from "../../context"

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
    const { roomCode } =  this.props
    return (
      <Consumer>
        {({ messages, locale }) => {
        const translate = (key, prefix = "deleteRoomModal") =>
          messages[`${prefix}.${key}`]
        return (
          <Modal
            className="delete-modal"
            header={
              translate("headerDeleteComfirm") + roomCode
        }
            trigger={(
              <Button className="red darken-2">
                {translate("buttonDelete")}
              </Button>
)}
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
)   }}
      </Consumer>
    )
  }
}

export default withRouter(DeleteRoomModal)

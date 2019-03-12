import React from "react"
import { withRouter } from "react-router-dom"
import RoomList from "./roomList"
import { Consumer } from "../../context"

const RoomListConsumer = props => {
  return (
    <Consumer>
      {({ formatMessage }) => (
        <RoomList translate={formatMessage("roomList")} {...props} />
      )}
    </Consumer>
  )
}

export default withRouter(RoomListConsumer)

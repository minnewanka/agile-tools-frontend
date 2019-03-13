import React from "react"
import { withRouter } from "react-router-dom"
import RoomList from "./roomList"
import { Consumer } from "../../context"

const RoomListConsumer = props => {
  return (
    <Consumer>
      {({ rooms, loadRooms, removeRoom, formatMessage }) => (
        <RoomList
          rooms={rooms}
          loadRooms={loadRooms}
          removeRoom={removeRoom}
          translate={formatMessage("roomList")}
          {...props}
        />
      )}
    </Consumer>
  )
}

export default withRouter(RoomListConsumer)

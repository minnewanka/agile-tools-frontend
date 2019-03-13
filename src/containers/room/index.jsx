import React from "react"
import Room from "./room"
import { Consumer } from "../../context"

const RoomConsumer = props => {
  return (
    <Consumer>
      {({ currentRoom, setCurrentRoom, formatMessage }) => (
        <Room
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
          translate={formatMessage("room")}
          {...props}
        />
      )}
    </Consumer>
  )
}

export default RoomConsumer

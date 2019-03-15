import React from "react"
import { Consumer } from "../../../context"
import RoomHeader from "./roomHeader"

const RoomHeaderConsumer = () => (
  <Consumer>
    {({ currentRoom: { roomName, roomCode } }) => {
      return <RoomHeader roomName={roomName} roomCode={roomCode} />
    }}
  </Consumer>
)

export default RoomHeaderConsumer

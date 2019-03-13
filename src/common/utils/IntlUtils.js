import merge from "lodash/merge"
import formCreateRoomMessages from "../../containers/createRoom/intl/message.json"
import roomMessages from "../../containers/room/intl/message.json"
import roomListMessages from "../../containers/roomList/intl/message.json"
import errorMessages from "../components/errorMessage/intl/message.json"

const allMessages = {}
merge(
  allMessages,
  formCreateRoomMessages,
  roomMessages,
  roomListMessages,
  errorMessages
)

export default allMessages

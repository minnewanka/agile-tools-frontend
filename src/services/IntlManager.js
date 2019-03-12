import merge from "lodash/merge"
import formCreateRoomMessages from "../components/formCreateRoom/intl/message.json"
import dashboardMessages from "../components/dashboard/intl/message.json"
import roomListMessages from "../components/roomList/intl/message.json"
import errorMessages from "../components/errorMessage/intl/message.json"

const allMessages = {}
merge(
  allMessages,
  formCreateRoomMessages,
  dashboardMessages,
  roomListMessages,
  errorMessages
)

export default allMessages

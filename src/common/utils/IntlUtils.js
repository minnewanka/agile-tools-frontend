import merge from "lodash/merge"
import globalMessage from "../intl/globalMessage.json"
import formCreateRoomMessages from "../../containers/createRoom/intl/message.json"
import roomMessages from "../../containers/room/intl/message.json"
import errorMessages from "../components/errorMessage/intl/message.json"
import footerMessages from "../components/contactUs/intl/message.json"

const allMessages = {}
merge(
  allMessages,
  globalMessage,
  formCreateRoomMessages,
  roomMessages,
  errorMessages,
  footerMessages
)

export const allLocales = Object.keys(allMessages)

export default allMessages

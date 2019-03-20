import merge from "lodash/merge"
import formCreateRoomMessages from "../../containers/createRoom/intl/message.json"
import roomMessages from "../../containers/room/intl/message.json"
import errorMessages from "../components/errorMessage/intl/message.json"
import footerMessages from "../components/footer/intl/message.json"

const allMessages = {}
merge(
  allMessages,
  formCreateRoomMessages,
  roomMessages,
  errorMessages,
  footerMessages
)

export const allLocales = Object.keys(allMessages)

export default allMessages

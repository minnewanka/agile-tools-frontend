import merge from 'lodash/merge'
import globalMessage from '../intl/globalMessage.json'
import roomEntranceMessages from '../../containers/roomEntrance/intl/message.json'
import roomFormMessages from '../../containers/roomEntrance/components/roomForm/intl/message.json'
import sideBarMessages from '../../containers/room/components/sideBar/intl/message.json'
import roomMessages from '../../containers/room/intl/message.json'
import errorMessages from '../components/errorMessage/intl/message.json'
import footerMessages from '../components/feedback/intl/message.json'

const allMessages = {}
merge(
  allMessages,
  globalMessage,
  roomEntranceMessages,
  roomFormMessages,
  roomMessages,
  errorMessages,
  footerMessages,
  sideBarMessages
)

export const allLocales = Object.keys(allMessages)

export default allMessages
import merge from 'lodash/merge'  
import formCreateRoom from '../components/formCreateRoom/intl/message.json'
import dashboard from '../components/dashboard/intl/message.json'
import errorMessage from '../components/errorMessage/intl/message.json'
import roomList from '../components/roomList/intl/message.json'

const allMessages = {}
merge(allMessages,...[formCreateRoom,errorMessage,dashboard,roomList])

const getAllMessages = (locale) => {

   return allMessages[locale]
}

export default getAllMessages
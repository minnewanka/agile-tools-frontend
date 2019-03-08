import formCreateRoom from '../components/formCreateRoom/il8n/message.json'
import dashboard from '../components/dashboard/il8n/message.json'
import errorMessage from '../components/errorMessage/il8n/message.json'
import roomList from '../components/roomList/il8n/message.json'
import merge from 'lodash/merge'

var allMessages = {}
merge(allMessages,...[formCreateRoom,errorMessage,dashboard,roomList])

const getAllMessages = (locale) => {

   return allMessages[locale]
}

export default getAllMessages
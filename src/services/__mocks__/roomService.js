import Parse from 'parse'

export const mockGetRoom = jest.fn(
  id =>
    new Promise((resolve, reject) => {
      const Room = Parse.Object.extend('Room')
      const room = new Room()
      room.set('name', 'Test Room')
      room.set('code', '12345')
      resolve(room)
    })
)

export const mockCreateRoom = jest.fn(
  name =>
    new Promise((resolve, reject) => {
      if (name === 'ROOM KO') {
        reject({ message: 'ROOM NOT CREATE' })
      } else {
        const Room = Parse.Object.extend('Room')
        const room = new Room()
        room.set('name', 'Test Room')
        resolve(room)
      }
    })
)

const mock = jest.fn().mockImplementation(() => {
  return { getRoom: mockGetRoom, createRoom: mockCreateRoom }
})

export default mock

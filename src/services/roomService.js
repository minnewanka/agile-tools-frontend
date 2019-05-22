import Parse from 'parse'

const createRoom = name => {
  const Room = Parse.Object.extend('Room')
  const roomQuery = new Room()

  roomQuery.set('name', name)
  return roomQuery.save()
}

const getRoom = code => {
  const Room = Parse.Object.extend('Room')
  const query = new Parse.Query(Room)
  query.equalTo('code', code)
  return query.first()
}
const updateRoomField = async (code, field, value) => {
  const Room = Parse.Object.extend('Room')
  const query = new Parse.Query(Room)
  query.equalTo('code', code)
  const room = await query.first()
  room.set(field, value)
  return room.save()
}

const deleteRoom = async code => {
  const Room = Parse.Object.extend('Room')
  const query = new Parse.Query(Room)
  query.equalTo('code', code)
  const object = await query.first()
  if (object) {
    // Suppression des votes
    const Vote = Parse.Object.extend('Vote')
    const queryVote = new Parse.Query(Vote)
    queryVote.equalTo('roomCode', code)
    const results = await queryVote.find()
    await Promise.all(results.map(result => result.destroy()))

  }
  return object.destroy()
}

const getRooms = async () => {
  const Room = Parse.Object.extend('Room')
  const query = new Parse.Query(Room)
  query.descending('createdAt')
  const results = await query.find()
  const rooms = results.map(result => ({
    code: result.get('code'),
    name: result.get('name')
  }))
  return rooms
}

export {
  createRoom,
  getRoom,
  getRooms,
  deleteRoom,
  updateRoomField
}
import Parse from 'parse'

  const createRoom = (name) => {
    const Room = Parse.Object.extend("Room")
    const roomQuery = new Room()

    roomQuery.set("name", name)
    return roomQuery.save()
  }

  const getRoom = (code) => {
    const Room = Parse.Object.extend("Room")
    const query = new Parse.Query(Room)
    query.equalTo("code", code)
    return query.first()
  }
  const deleteRoom = async (code) => {
    const Room = Parse.Object.extend("Room")
    const query = new Parse.Query(Room)
    query.equalTo("code", code)
    const object = await query.first()
    return object.destroy()
  }

const getRooms = async () => {
  const Room = Parse.Object.extend("Room")
  const query = new Parse.Query(Room)
  query.descending("createdAt")
  const results = await query.find()
  const rooms = results.map((result) => (
    { code: result.get("code"), name: result.get("name") }
  ))
  return rooms
}



export { createRoom, getRoom , getRooms, deleteRoom}

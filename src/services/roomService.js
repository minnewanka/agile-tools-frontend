import Parse from 'parse'

  var createRoom = (name) => {
    const Room = Parse.Object.extend("Room")
    const roomQuery = new Room()

    roomQuery.set("name", name)
    return roomQuery.save()
  }

  var getRoom = (code) => {
    const Room = Parse.Object.extend("Room")
    const query = new Parse.Query(Room)
    query.equalTo("code", code)
    return query.first()
  }
  var deleteRoom = async (code) => {
    const Room = Parse.Object.extend("Room")
    const query = new Parse.Query(Room)
    query.equalTo("code", code)
    const object = await query.first()
    return object.destroy()
  }

var getRooms = async () => {
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

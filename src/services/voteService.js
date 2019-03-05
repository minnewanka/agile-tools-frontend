import Parse from 'parse'

var getVotes = async (roomCode) => {

  const Vote = Parse.Object.extend("Vote")
  const query = new Parse.Query(Vote)
  query.equalTo("roomCode", roomCode)
  const results = await query.find()
  const participants = results.map((result) => (
    { username: result.get("username"), pokerVote: result.get("pokerplanning"), tshirtVote: result.get("tshirt") }
  ))
  return participants
}
var deleteVote = async (username) => {
  const Vote = Parse.Object.extend("Vote")
  const query = new Parse.Query(Vote)
  query.equalTo("username", username)
  const object = await query.first()
  return object.destroy()
}
export { getVotes , deleteVote }
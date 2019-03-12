import Parse from 'parse'

const getVotes = async (roomCode) => {

  const Vote = Parse.Object.extend("Vote")
  const query = new Parse.Query(Vote)
  query.equalTo("roomCode", roomCode)
  const results = await query.find()
  const participants = results.map((result) => (
    { username: result.get("username"), pokerVote: result.get("pokerplanning"), tshirtVote: result.get("tshirt") }
  ))
  return participants
}
const deleteVote = async (username) => {
  const Vote = Parse.Object.extend("Vote")
  const query = new Parse.Query(Vote)
  query.equalTo("username", username)
  const object = await query.first()
  return object.destroy()
}
export { getVotes , deleteVote }
import Parse from 'parse'

const getVotes = async roomCode => {
  const Vote = Parse.Object.extend('Vote')
  const query = new Parse.Query(Vote)
  query.equalTo('roomCode', roomCode)
  const results = await query.find()
  const participants = results.map(result => ({
    username: result.get('username'),
    pokerplanning: result.get('pokerplanning'),
    tshirt: result.get('tshirt')
  }))
  return participants
}
const deleteVote = async username => {
  const Vote = Parse.Object.extend('Vote')
  const query = new Parse.Query(Vote)
  query.equalTo('username', username)
  const object = await query.first()
  return object.destroy()
}

const resetAllVotes = async (roomCode, ceremony) => {
  const Vote = Parse.Object.extend('Vote')
  const query = new Parse.Query(Vote)
  query.equalTo('roomCode', roomCode)
  const results = await query.find()
  results.forEach(result => {
    result.set(ceremony, '')
  })
  return Parse.Object.saveAll(results)
}

export { getVotes, deleteVote, resetAllVotes }

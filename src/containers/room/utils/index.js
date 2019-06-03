const sortParticipants = (pParticipants, ceremony) => {
  switch (ceremony) {
    case 'pokerplanning':
      return sortPokerPlanning(pParticipants)
    case 'tshirt':
      return sortTshirt(pParticipants)
    default:
      return sortTrafficLight(pParticipants)
  }
}

const sortPokerPlanning = pParticipants => {
  return pParticipants.concat().sort((a, b) => {
    if (b.pokerplanning === 'scissor' || a.pokerplanning === undefined) return -1
    if (a.pokerplanning === 'scissor' || b.pokerplanning === undefined)
      return 1
    if (b.pokerplanning === '?' || a.pokerplanning === undefined) return -1
    if (a.pokerplanning === '?' || b.pokerplanning === undefined)
      return 1
    return b.pokerplanning - a.pokerplanning
  })
}

const sortTshirt = pParticipants => {
  const ordering = {
    '?': 0,
    XS: 1,
    S: 2,
    M: 3,
    L: 4,
    XL: 5,
    XXL: 6
  }
  return pParticipants.concat().sort((a, b) => {
    return ordering[b.tshirt] - ordering[a.tshirt]
  })
}

const sortTrafficLight = pParticipants => {
  const ordering = {
    green: 0,
    orange: 1,
    red: 2
  }
  return pParticipants.concat().sort((a, b) => {
    return ordering[b.trafficlight] - ordering[a.trafficlight]
  })
}

// Check if participants contains a value for a given ceremony
const containsCeremonyValue = (pParticipants, ceremony, value) => {
  if (pParticipants.filter(participant => participant[ceremony] === value).length > 0) {
    return true
  }
  return false

}

export {
  sortParticipants,
  containsCeremonyValue
}
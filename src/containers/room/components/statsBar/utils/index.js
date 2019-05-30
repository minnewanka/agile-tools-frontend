const filterTrafficLight = (pParticipants, color) => {
  return pParticipants.filter(participant => participant.trafficlight === color)
    .length
}




// Return an object : Object{ S:value, ...N:Value}
const countTshirt = pParticipants => {
  const sizeList = ['XS', 'S', 'M', 'L', 'XL', 'XXL', "?"]
  const tshirtMapSizeValues = {}
  for (let i = 0; i < sizeList.length; i += 1) {
    tshirtMapSizeValues[sizeList[i]] = pParticipants.filter(
      participant => participant.tshirt === sizeList[i]
    ).length
  }
  return tshirtMapSizeValues
}

// Return an object : Object{ S:value, ...N:Value}
const countCards = pParticipants => {
  const sizeList = pParticipants.filter(participant => participant.pokerplanning).map(participant => participant.pokerplanning).sort()
  const cardMapSizeValues = {}
  for (let i = 0; i < sizeList.length; i += 1) {
    cardMapSizeValues[sizeList[i]] = pParticipants.filter(
      participant => participant.pokerplanning === sizeList[i]
    ).length
  }
  return cardMapSizeValues
}


export {
  filterTrafficLight,
  countCards,
  countTshirt
}
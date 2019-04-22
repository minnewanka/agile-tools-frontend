const filterTrafficLight = (pParticipants, color) => {
  return pParticipants.filter(participant => participant.trafficlight === color)
    .length
}

const filterPokerplanning = (pParticipants, operator) => {
  switch (operator) {
    case 'max':
      return Math.max(
        ...pParticipants
          .filter(participant => participant.pokerplanning)
          .map(participant => Number(participant.pokerplanning))
      )
    case 'min':
      return Math.min(
        ...pParticipants
          .filter(participant => participant.pokerplanning)
          .map(participant => Number(participant.pokerplanning))
      )
    default:
      return console.log('Default Case : filterPokerplanning')
  }
}

const filterTshirt = (pParticipants, operator) => {
  const tshirtMapSizeValues = countTshirt(pParticipants)
  switch (operator) {
    case 'max':
      return Object.keys(tshirtMapSizeValues)[
        Math.max(...Object.values(tshirtMapSizeValues))
      ]
    case 'min':
      return Object.keys(tshirtMapSizeValues)[
        Math.min(...Object.values(tshirtMapSizeValues))
      ]

    default:
      return console.log('filterTshirt : filterPokerplanning')
  }
}

const countTshirt = pParticipants => {
  const sizeList = ['S', 'M', 'L', 'XL', 'XXL']
  const tshirtMapSizeValues = {}
  for (let i = 0; i < sizeList.length; i++) {
    tshirtMapSizeValues[sizeList[i]] = pParticipants.filter(
      participant => participant.tshirt === sizeList[i]
    ).length
  }

  return tshirtMapSizeValues
}
export { filterTrafficLight, filterPokerplanning, filterTshirt, countTshirt }

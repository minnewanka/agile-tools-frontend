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
  const tshirtSize = countTshirt(pParticipants)
  const tshirtSizeMapValue = [...Object.entries(tshirtSize)]
  return getMinMaxTshirtValue(tshirtSizeMapValue, operator)
}

// Return an object : Object{ S:value, ...N:Value}
const countTshirt = pParticipants => {
  const sizeList = ['XS', 'S', 'M', 'L', 'XL', 'XXL', "?"]
  const tshirtMapSizeValues = {}
  for (let i = 0; i < sizeList.length; i++) {
    tshirtMapSizeValues[sizeList[i]] = pParticipants.filter(
      participant => participant.tshirt === sizeList[i]
    ).length
  }
  return tshirtMapSizeValues
}

// Return an object : Object{ S:value, ...N:Value}
const countCards = pParticipants => {
  const sizeList = pParticipants.map(participant => participant.pokerplanning).sort()
  const cardMapSizeValues = {}
  for (let i = 0; i < sizeList.length; i++) {
    cardMapSizeValues[sizeList[i]] = pParticipants.filter(
      participant => participant.pokerplanning === sizeList[i]
    ).length
  }
  return cardMapSizeValues
}

// Return the letter value for the min max Tshirt Size
const getMinMaxTshirtValue = (ptshirtSizeMapValue, operator) => {
  let value
  let size
  ptshirtSizeMapValue.forEach(entry => {
    const psize = entry[0]
    const pvalue = entry[1]
    if (operator === 'max') {
      if (pvalue > value || value === undefined) {
        value = pvalue
        size = psize
      }
    } else if (operator === 'min') {
      if (pvalue !== 0 && (pvalue < value || value === undefined)) {
        value = pvalue
        size = psize
      }
    }
  })
  return size
}

export {
  filterTrafficLight,
  filterPokerplanning,
  filterTshirt,
  countCards,
  countTshirt
}
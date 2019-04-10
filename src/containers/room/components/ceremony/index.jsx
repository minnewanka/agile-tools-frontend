import React from 'react'
import Ceremony from './ceremony'
import { Consumer } from '../../../../context'

const CeremonyConsumer = props => {
  return (
    <Consumer>
      {({ currentRoom: { ceremony, isFlipped, toggleFlipped } }) => (
        <Ceremony
          ceremony={ceremony}
          isFlipped={isFlipped}
          toogleFlipped={toggleFlipped}
          {...props}
        />
      )}
    </Consumer>
  )
}

export default CeremonyConsumer

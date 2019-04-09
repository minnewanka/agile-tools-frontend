import React from 'react'
import CeremonySelection from './ceremonySelection'
import { Consumer } from '../../../../context'

const CeremonySelectionConsumer = props => {
  return (
    <Consumer>
      {({ changeCeremony, currentRoom: { ceremony } }) => (
        <CeremonySelection
          changeCeremony={changeCeremony}
          ceremony={ceremony}
          {...props}
        />
      )}
    </Consumer>
  )
}

export default CeremonySelectionConsumer

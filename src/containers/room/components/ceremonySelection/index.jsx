import React from 'react'
import CeremonySelection from './ceremonySelection'
import { Consumer } from '../../../../context'

const CeremonySelectionConsumer = props => {
  return (
    <Consumer>
      {({ changeCeremony }) => (
        <CeremonySelection changeCeremony={changeCeremony} {...props} />
      )}
    </Consumer>
  )
}

export default CeremonySelectionConsumer

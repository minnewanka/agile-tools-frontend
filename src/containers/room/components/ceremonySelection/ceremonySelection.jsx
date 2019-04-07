import React from 'react'
import './ceremonySelection.scss'
import { Icon } from 'react-materialize'

const CeremonySelection = props => {
  const { changeCeremony } = props
  return (
    <div className="ceremonySelection">
      <div
        role="button"
        className="pokerplanning"
        onClick={() => changeCeremony('pokerplanning')}
      >
        <div>poker planning</div>
        <Icon middle className="ceremony-icon">
          collections
        </Icon>
      </div>
      <div
        role="button"
        className="tshirt"
        onClick={() => changeCeremony('tshirt')}
      >
        <div>tshirt</div>
        <Icon middle className="ceremony-icon">
          cloud
        </Icon>
      </div>
    </div>
  )
}

export default CeremonySelection

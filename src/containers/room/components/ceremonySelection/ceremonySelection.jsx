import React from 'react'
import './ceremonySelection.scss'
import { ReactComponent as PokerPlanningIcon } from '../../../../img/poker-planning-icon.svg'
import { ReactComponent as TshirtIcon } from '../../../../img/tshirt-icon.svg'
import { ReactComponent as TrafficIcon } from '../../../../img/trafficlight-icon.svg'

const CeremonySelection = props => {
  const { changeCeremony, ceremony } = props

  return (
    <div className="ceremonySelection">
      <div
        role="button"
        className={`ceremony-icon ${
          ceremony === 'pokerplanning' ? 'border-white' : ''
        }`}
        onClick={() => changeCeremony('pokerplanning')}
      >
        <PokerPlanningIcon className="pokerplanning" />
      </div>
      <div
        role="button"
        className={`ceremony-icon ${
          ceremony === 'tshirt' ? 'border-white' : ''
        }`}
        onClick={() => changeCeremony('tshirt')}
      >
        <TshirtIcon className="tshirt" />
      </div>
      <div
        role="button"
        className={`ceremony-icon ${
          ceremony === 'trafficlight' ? 'border-white' : ''
        }`}
        onClick={() => changeCeremony('trafficlight')}
      >
        <TrafficIcon className="trafficlight" />
      </div>
    </div>
  )
}

export default CeremonySelection

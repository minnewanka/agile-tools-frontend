/* eslint-disable no-nested-ternary */
import React from 'react'
import { Icon } from 'react-materialize'
import { deleteVote } from '../../../../services/voteService'
import './participantItem.scss'

const ParticipantItem = props => {
  const { participant, isFlipped, ceremony, translate } = props

  const Vote = type => {
    switch (type) {
      case 'pokerplanning':
        return participant.pokerplanning !== 'scissor' ? (
          participant.pokerplanning
        ) : (
          <Icon className="scissor-icon">content_cut</Icon>
        )
      case 'tshirt':
        return participant.tshirt
      case 'trafficlight':
        return participant.trafficlight ? (
          <Icon
            className={`trafficlight-icon trafficlight-${
              participant.trafficlight
            }`}
          >
            lens
          </Icon>
        ) : (
          ''
        )
      default:
        return null
    }
  }
  return (
    <div className="participant-item">
      <span className="participant-item-text">{participant.username}</span>
      <div className="participant-vote">
        {isFlipped && participant[ceremony]
          ? translate('voted')
          : Vote(ceremony)}
      </div>
      <span
        role="button"
        className="deleteIcon"
        onClick={() => deleteVote(participant.username)}
      >
        &times;
      </span>
    </div>
  )
}

export default ParticipantItem

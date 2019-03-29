/* eslint-disable no-nested-ternary */
import React from "react"
import { Icon } from "react-materialize"
import { deleteVote } from "../../../../services/voteService"
import "./participantItem.scss"

const ParticipantItem = props => {
  const { participant, isFlipped, ceremony } = props
  return (
    <div className="participant-item">
      <span className="participant-item-text">{participant.username}</span>
      <div className="participant-vote">
        {isFlipped ? (
          <Icon className="scissor-icon">
            <span>check</span>
          </Icon>
        ) : ceremony === "pokerplanning" ? (
          participant.pokerplanning !== "scissor" ? (
            participant.pokerplanning
          ) : (
            <Icon className="scissor-icon">
              <span>content_cut</span>
            </Icon>
          )
        ) : (
          participant.tshirt
        )}
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

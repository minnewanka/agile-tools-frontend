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
      <div className={`participant-vote ${isFlipped ? "hidden" : ""}`}>
        {ceremony === "pokerplanning" ? (
          participant.pokerVote !== "scissor" ? (
            participant.pokerVote
          ) : (
            <Icon className="scissor-icon">
              <span>content_cut</span>
            </Icon>
          )
        ) : (
          participant.tshirtVote
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

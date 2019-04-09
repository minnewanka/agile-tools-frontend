/* eslint-disable no-nested-ternary */
import React from "react"
import "./sideBar.scss"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import ParticipantItem from "./participantItem"

const SideBar = props => {
  const {
    ceremony,
    roomCode,
    roomName,
    translate,
    participants,
    isFlipped
  } = props

  const sortParticipants = pParticipants => {
    if (ceremony === "pokerplanning") {
      return pParticipants.concat().sort((a, b) => {
        if (b.pokerplanning === "scissor" || a.pokerplanning === undefined)
          return 1
        if (a.pokerplanning === "scissor" || b.pokerplanning === undefined)
          return -1
        return b.pokerplanning - a.pokerplanning
      })
    }
    const ordering = {
      XS: 1,
      S: 2,
      M: 3,
      L: 4,
      XL: 5,
      XXL: 6
    }
    return pParticipants.concat().sort((a, b) => {
      return ordering[b.tshirt] - ordering[a.tshirt]
    })
  }

  let participantsToRender = participants
  if (!isFlipped) {
    participantsToRender = sortParticipants(participants)
  }

  return (
    <div className="sideBarContainer">
      <div className="roomInfo">
        <h4>Room# {roomCode}</h4>
        <h6>{roomName}</h6>
      </div>

      <ul className="participants-list custom-scrollbar">
        <TransitionGroup>
          {participantsToRender.map(participant => (
            <CSSTransition
              timeout={500}
              classNames="fade"
              key={`sideBarParticipant${participant.username}`}
            >
              <li>
                <ParticipantItem
                  participant={participant}
                  isFlipped={isFlipped}
                  ceremony={ceremony}
                  translate={translate}
                />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  )
}

export default SideBar

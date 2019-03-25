/* eslint-disable no-nested-ternary */
import React from "react"
import "./sideBar.scss"
import { Input, Collection, CollectionItem } from "react-materialize"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import ParticipantItem from "./participantItem"

const SideBar = props => {
  const { ceremony, handleTypeRoom, translate, participants, isFlipped } = props

  const sortParticipants = pParticipants => {
    if (ceremony === "pokerplanning") {
      return pParticipants.concat().sort((a, b) => {
        if (b.pokerVote === "scissor") return 1
        if (a.pokerVote === "scissor") return -1
        return b.pokerVote - a.pokerVote
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
      return ordering[b.tshirtVote] - ordering[a.tshirtVote]
    })
  }

  let participantsToRender = participants
  if (!isFlipped) {
    participantsToRender = sortParticipants(participants)
  }

  return (
    <div className="sideBarContainer">
      <div className="ceremony-dropdown">
        <Input
          type="select"
          label="Ceremonie"
          icon="event_seat"
          defaultValue={ceremony}
          onChange={handleTypeRoom}
        >
          <option value="pokerplanning">Poker Planning</option>
          <option value="tshirt">T Shirt</option>
        </Input>
      </div>

      <Collection className="participants-list">
        <h5 className="participants-list-header center-align">
          {translate("participants")}
        </h5>
        <TransitionGroup>
          {participantsToRender.map(participant => (
            <CSSTransition
              timeout={500}
              classNames="fade"
              key={`sideBarParticipant${participant.username}`}
            >
              <CollectionItem className="collectionItem-container">
                <ParticipantItem
                  participant={participant}
                  isFlipped={isFlipped}
                  ceremony={ceremony}
                />
              </CollectionItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Collection>
    </div>
  )
}

export default SideBar

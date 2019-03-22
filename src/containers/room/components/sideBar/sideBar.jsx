import React from "react"
import "./sideBar.scss"
import { Input, Collection, CollectionItem, Icon } from "react-materialize"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { deleteVote } from "../../../../services/voteService"

const SideBar = props => {
  const { ceremony, handleTypeRoom, translate, participants } = props
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
          {participants.map(participant => (
            <CSSTransition
              timeout={500}
              classNames="fade"
              key={`sideBarParticipant${participant.username}`}
            >
              <CollectionItem className="participant-item">
                <Icon className="account-icon" center>
                  account_circle
                </Icon>
                <span className="participant-item-text">
                  {participant.username}
                </span>
                <span
                  role="button"
                  className="deleteIcon"
                  onClick={() => deleteVote(participant.username)}
                >
                  &times;
                </span>
              </CollectionItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Collection>
    </div>
  )
}

export default SideBar

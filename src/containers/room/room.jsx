import React, { Component } from 'react'
import './room.scss'
import Ceremony from './components/ceremony'
import SideBar from './components/sideBar'
import DeleteRoomModal from './components/deleteRoomModal'
import LangToggle from '../../common/components/langToggle'
import RoomHeader from '../../common/components/roomHeader'
import CeremonySelection from './components/ceremonySelection'

class Room extends Component {
  constructor(props) {
    super(props)

    const {
      location: { state },
      setCurrentRoom,
      currentRoom: { roomCode }
    } = props
    if (state && roomCode !== state.roomCode)
      setCurrentRoom(state && state.roomCode)
    this.handleTypeRoom = this.handleTypeRoom.bind(this)
  }

  handleFlip(e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  handleTypeRoom(evt) {
    const { changeCeremony } = this.props

    changeCeremony(evt.target.value)
  }

  render() {
    const {
      currentRoom: {
        participants,
        roomCode,
        ceremony,
        isFlipped,
        toggleFlipped
      },
      translate,
      resetVote,
      location: { state }
    } = this.props
    const currentParticipants =
      state && roomCode === state.roomCode && participants ? participants : []

    const isEveryoneVote =
      currentParticipants.length > 0 &&
      (currentParticipants.length ===
        currentParticipants.filter(participant => participant[ceremony])
          .length ||
        !isFlipped)

    return (
      <div className="room-container">
        <div className="left-container">
          <div className="header-container">
            <RoomHeader />
          </div>
          <div className="ceremony-container">
            <Ceremony participants={currentParticipants} />
          </div>
          <div className="ceremony-actions-container">
            <button
              type="button"
              className="button-default-style btn-room-reveal"
              disabled={!isEveryoneVote}
              waves="light"
              onClick={toggleFlipped}
            >
              {isFlipped ? translate('buttonReveal') : translate('buttonHide')}
            </button>
            <button
              type="button"
              className="button-default-style btn-room-reset"
              waves="light"
              onClick={resetVote}
            >
              {translate('buttonReset')}
            </button>
          </div>
        </div>
        <div className="right-container">
          <div className="lang-container">
            <LangToggle className="lang-toggle" />
          </div>
          <div className="ceremony-radio-container">
            <CeremonySelection />
          </div>
          <div className="sidebar-container">
            <SideBar
              ceremony={ceremony}
              handleTypeRoom={this.handleTypeRoom}
              participants={currentParticipants}
              className="sidebar"
            />
          </div>
          <div className="btn-delete-container">
            <DeleteRoomModal roomCode={roomCode} />
          </div>
        </div>
      </div>
    )
  }
}

export default Room

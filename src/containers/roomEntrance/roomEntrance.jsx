import React from 'react'
import './roomEntrance.scss'
import DefaultHeader from '../../common/components/defaultHeader'
import CreateRoomForm from './components/roomForm/createRoomForm'
import LoadRoomForm from './components/roomForm/loadRoomForm'
import MobileStoreIcon from '../../common/components/mobileStoreIcon'

const RoomEntrance = props => {
  const { translate, roomEntranceFormType } = props

  return (
    <div className="main-container">
      <DefaultHeader />
      <div className="card-container">
        {roomEntranceFormType === 'create' ? (
          <CreateRoomForm translate={translate} />
        ) : (
          <LoadRoomForm translate={translate} />
        )}
        <div className="store-badge-text center-align">
          <h5>{translate('textMobile')}</h5>
          <div className="store-badge-container">
            <MobileStoreIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
export default RoomEntrance

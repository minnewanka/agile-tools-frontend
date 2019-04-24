import React from 'react'
import './home.scss'
import DefaultHeader from '../../common/components/defaultHeader'
import CreateRoomForm from './components/roomForm/createRoomForm'
import LoadRoomForm from './components/roomForm/loadRoomForm'
import MobileStoreIcon from '../../common/components/mobileStoreIcon'

const Home = props => {
  const { translate, homePageFormType } = props

  return (
    <div className="main-container">
      <DefaultHeader />
      <div className="card-container">
        {homePageFormType === 'create' ? (
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
export default Home

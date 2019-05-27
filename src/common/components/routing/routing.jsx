import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import RoomEntrance from '../../../containers/roomEntrance'
// import RoomList from '../../../containers/roomList'
import Room from '../../../containers/room'
import PrivacyPolicy from '../privacyPolicy'
import Layout from '../layout/layout'
import Page404 from '../404/404'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout exact path="/" component={RoomEntrance} noHeader />
        <Layout path="/room" component={Room} noHeader />
        {/* disable feature for v1 
        <Layout path="/rooms" component={RoomList} /> */}
        <Layout path="/privacy-policy" component={PrivacyPolicy} headerStyled />
        <Layout path="/404" component={Page404} headerStyled />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default Routes

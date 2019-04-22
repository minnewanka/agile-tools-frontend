import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import CreateRoom from '../../../containers/createRoom'
// import RoomList from '../../../containers/roomList'
import Room from '../../../containers/room'
import Layout from '../layout/layout'
import Page404 from '../404/404'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout exact path="/" component={CreateRoom} />
        <Layout path="/room" component={Room} roomHeader />
        {/* disable feature for v1 
        <Layout path="/rooms" component={RoomList} /> */}
        <Layout path="/404" component={Page404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default Routes

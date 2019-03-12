import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import FormCreateRoom from '../formCreateRoom/formCreateRoom'
import RoomList from '../roomList/roomList'
import Dashboard from '../dashboard/dashboard'
import Layout from './layout'
import Page404 from '../404/404'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout exact path="/" component={FormCreateRoom} />
        <Route path="/dashboard" component={Dashboard} />
        <Layout path="/rooms" component={RoomList} />
        <Layout path="/404" component={Page404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default Routes

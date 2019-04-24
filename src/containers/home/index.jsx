import React from 'react'
import { withRouter } from 'react-router-dom'
import Home from './home'
import { Consumer } from '../../context'

const HomeConsumer = props => {
  return (
    <Consumer>
      {({ formatMessage, homePageFormType }) => (
        <Home
          translate={formatMessage('home')}
          homePageFormType={homePageFormType}
          {...props}
        />
      )}
    </Consumer>
  )
}

export default withRouter(HomeConsumer)

import React from 'react'
import { withRouter } from 'react-router-dom'
import DefaultHeader from './defaultHeader'

const DefaultHeaderConsumer = props => <DefaultHeader {...props} />

export default withRouter(DefaultHeaderConsumer)

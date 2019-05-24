import React from 'react'
import { Consumer } from '../../../context'
import PrivacyPolicy from './privacyPolicy'

const PrivacyPolicyConsumer = props => (
  <Consumer>
    {({ formatMessage }) => (
      <PrivacyPolicy translate={formatMessage('privacy')} {...props} />
    )}
  </Consumer>
)

export default PrivacyPolicyConsumer

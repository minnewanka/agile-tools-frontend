import React from 'react'
import { Consumer } from '../../../context'
import MobileStoreIcon from './mobileStoreIcon'

const MobileStoreIconConsumer = props => (
  <Consumer>
    {({ locale }) => <MobileStoreIcon locale={locale} {...props} />}
  </Consumer>
)

export default MobileStoreIconConsumer

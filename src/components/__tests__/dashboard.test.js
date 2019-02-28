import React from 'react'
import { shallow, render } from 'enzyme'
import Dashboard from '../dashboard/dashboard'
import RoomInfo from '../dashboard/roomInfo'


it('renders room info', () => {
   const location = {
     state: {
      roomId:"12345"
     }
   }
  const result = shallow(<Dashboard location={location}/>).contains(
    <RoomInfo roomId="12345" />)
  expect(result).toBeTruthy()
})
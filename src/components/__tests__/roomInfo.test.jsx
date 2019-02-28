import React from 'react'
import { mount } from 'enzyme'
import RoomInfo from '../dashboard/roomInfo'
import RoomService, { mockGetRoom } from '../../services/roomService'
jest.mock('../../services/roomService')

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  RoomService.mockClear()
  mockGetRoom.mockClear()
})

describe('RoomInfo component testing', () => {
  it('should return codeRoom', async () => {

    const wrapper =  await mount(<RoomInfo roomId="XcaFJdjPgj" />)
    expect(RoomService).toHaveBeenCalledTimes(1)
    expect(mockGetRoom).toHaveBeenCalledTimes(1)
    expect(wrapper.state('roomName')).toEqual("Test Room")
    expect(wrapper.state('roomCode')).toEqual("12345")
   
  })
})

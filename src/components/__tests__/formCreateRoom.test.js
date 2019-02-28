import React from 'react'
import { mount } from 'enzyme'
import {FormCreateRoom} from '../formCreateRoom/formCreateRoom'
import { Input } from 'react-materialize'
import RoomService, { mockCreateRoom } from '../../services/roomService'

jest.mock('../../services/roomService')
const historyMock = { push: jest.fn() }
describe('FormCreateRoom component testing', () => {
  let spy = spyConsole()
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    RoomService.mockClear()
    mockCreateRoom.mockClear()
  })

  it('should simulate the button click event with a room name and render error is false', () => {
   
    const wrapper = mount(<FormCreateRoom history={historyMock}/>)

    //Simulate user sets room code
    wrapper.find(Input).props().onChange({ target: { value: "ROOM NAME" } })
    wrapper.find(Input).props().onFocus({ target: {} })
    
    const form = wrapper.find('form')
    form.simulate('submit')

    expect(RoomService).toHaveBeenCalledTimes(1)
    expect(mockCreateRoom).toHaveBeenCalledTimes(1)
    expect(form).toBeDefined()
    expect(wrapper.state().error).toEqual(false)
  })

  it('should simulate the button click event with no room name and render error is true', () => {
   
    const wrapper = mount(<FormCreateRoom history={historyMock}/>)
    
    const form = wrapper.find('form')
    form.simulate('submit')

    expect(form).toBeDefined()
    expect(wrapper.state().error).toEqual(true)
  })

  it('should simulate a error server and verify errorServer is true', async () => {

    const wrapper = mount(<FormCreateRoom history={historyMock}/>)
   //Simulate user sets room code
   wrapper.find(Input).props().onChange({ target: { value: "ROOM KO" } }) //@see __mock__/roomService.js
   wrapper.find(Input).props().onFocus({ target: {} })
   
   const form = wrapper.find('form')
   await form.simulate('submit')

   expect(RoomService).toHaveBeenCalledTimes(1)
   expect(mockCreateRoom).toHaveBeenCalledTimes(1)
   expect(form).toBeDefined()
   expect(console.error).toHaveBeenCalled()
   
  })


  
})

function spyConsole() {
  let spy = {}
  beforeAll(() => {
      spy.console = jest.spyOn(console, 'error').mockImplementation(() => {})
  })
  afterAll(() => {
      spy.console.mockRestore();
  })
  return spy
}

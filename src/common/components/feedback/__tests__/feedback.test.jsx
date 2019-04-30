import React from 'react'
import { mount, shallow } from 'enzyme'
import Feedback from '../Feedback'

it('smoke test', () => {
  shallow(<Feedback />)
})

it('should change subject to BUG', () => {
  const wrapper = mount(<Feedback />)
  wrapper.find('select').simulate('change', { target: { value: 'BUG' } })
  expect(wrapper.state('subject')).toEqual('BUG')
})

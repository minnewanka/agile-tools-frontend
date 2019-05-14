import React from 'react'
import { mount, shallow } from 'enzyme'
import Feedback from '../feedback'

it('smoke test', () => {
  shallow(<Feedback />)
})

it('should change subject to COMMENT', () => {
  const wrapper = mount(<Feedback />)
  wrapper.find('select').simulate('change', { target: { value: 'COMMENT' } })
  expect(wrapper.state('subject')).toEqual('COMMENT')
})

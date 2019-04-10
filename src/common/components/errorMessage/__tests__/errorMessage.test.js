import React from 'react'
import { shallow } from 'enzyme'
import ErrorMessage from '../'

it('smoke test', () => {
  shallow(<ErrorMessage />)
})

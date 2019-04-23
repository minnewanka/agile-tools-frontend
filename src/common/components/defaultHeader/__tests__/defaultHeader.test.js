import React from 'react'
import { shallow } from 'enzyme'
import DefaultHeader from '../defaultHeader'

it('smoke test', () => {
  shallow(<DefaultHeader />)
})

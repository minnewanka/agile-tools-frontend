import React from 'react'
import { shallow } from 'enzyme'
import AppWrapper from '../appWrapper'
import App from '../app'

it('smoke test AppWrapper', () => {
  shallow(<AppWrapper />)
})

it('smoke test App', () => {
  shallow(<App />)
})

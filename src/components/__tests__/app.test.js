import * as React from 'react'
import { shallow } from 'enzyme'
import Routes from "../routing"

import App from '../../app'

it('renders the heading', () => {
  const result = shallow(<App />).contains(
    <div className="App">
      <Routes />
    </div>)
  expect(result).toBeTruthy()
})
import React from 'react'
import { shallow } from 'enzyme'
import Routes from '../routing'
import RoomEntrance from '../../../../containers/roomEntrance'
import Room from '../../../../containers/room'
import Layout from '../../layout/layout'
import Page404 from '../../../../common/components/404'

it('smoke test', () => {
  shallow(<Routes />)
})

it('renders correct routes', () => {
  const wrapper = shallow(<Routes />)
  const pathMap = wrapper.find(Layout).reduce((pathMap, route) => {
    const routeProps = route.props()
    pathMap[routeProps.path] = routeProps.component
    return pathMap
  }, {})

  expect(pathMap['/']).toBe(RoomEntrance)
  expect(pathMap['/room']).toBe(Room)
  expect(pathMap['/404']).toBe(Page404)
})

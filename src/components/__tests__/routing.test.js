import React from 'react'
import { mount } from 'enzyme'
import Routes from '../routing'
import Dashboard from '../dashboard/dashboard'
import Layout from '../routing/layout'
import FormCreateRoom from '../formCreateRoom/formCreateRoom'
import Page404 from '../404/404'
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom'

test('/ should redirect to FormCreateRoom', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <Routes/>
    </MemoryRouter>
  )
 
  const layoutProps = wrapper.find(Layout).props('component')
  expect(layoutProps.component).toBe(FormCreateRoom)
})

test('/dashboard redirect to Dashboard', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/dashboard']}>
      <Routes/>
    </MemoryRouter>
  )
 
  const layoutProps = wrapper.find(Route).props('component')
  expect(layoutProps.component).toBe(Dashboard)
})

test('/404 redirect to Page404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/404']}>
      <Routes/>
    </MemoryRouter>
  )
 
  const layoutProps = wrapper.find(Layout).props('component')
  expect(layoutProps.component).toBe(Page404)
})

test('invalid path should redirect to Page404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/random']}>
      <Routes/>
    </MemoryRouter>
  )
 
  const layoutProps = wrapper.find(Layout).props('component')
  expect(layoutProps.component).toBe(Page404)
})

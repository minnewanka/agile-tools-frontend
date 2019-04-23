import React from 'react'
import DefaultHeader from '../defaultHeader'
import './404.scss'

const Page404 = () => {
  return (
    <>
      <DefaultHeader logoColor="blue" />
      <div className="errorMessage">
        <span>404</span>
      </div>
    </>
  )
}

export default Page404

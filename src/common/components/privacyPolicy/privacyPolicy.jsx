import React from 'react'

import './privacyPolicy.scss'

const PrivacyPolicy = ({ translate }) => {
  return (
    <>
      <div className="container privacy-policy">
        <h3 className="title">{translate('title')}</h3>
        <p>{translate('p1')}</p>
        <br />
        <p>{translate('p2')}</p>
        <br />
        <p>{translate('p3')}</p>
        <br />
        <p>{translate('p4')}</p>
        <p>{translate('p5')}</p>
        <br />
        <p>{translate('p6')}</p>
        <br />
        <p>{translate('p7')}</p>
      </div>
    </>
  )
}

export default PrivacyPolicy

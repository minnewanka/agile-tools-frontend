import React from 'react'
import './langToggle.scss'

const LangToggle = props => {
  const { locale, changeLang } = props
  const nextLang = locale === 'fr' ? 'en' : 'fr'
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => {
        changeLang()
      }}
    >
      {nextLang.toUpperCase()}
    </button>
  )
}

export default LangToggle

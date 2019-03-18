import React from "react"
import "./langToggle.scss"

const LangToggle = props => {
  const { locale, changeLang, className } = props
  const nextLang = locale === "fr" ? "en" : "fr"
  return (
    <button
      type="button"
      className={`lang-toggle btn-round ${className}`}
      onClick={() => {
        changeLang()
      }}
    >
      {nextLang.toUpperCase()}
    </button>
  )
}

export default LangToggle

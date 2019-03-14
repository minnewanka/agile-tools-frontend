import React from "react"
import "./langToggle.scss"

const LangToggle = props => {
  const { locale, changeLang } = props
  const nextLang = locale === "fr" ? "en" : "fr"
  return (
    <button
      type="button"
      className="button-linkstyle-lang lang-toggle grow"
      onClick={() => {
        changeLang()
      }}
    >
      {nextLang.toUpperCase()}
    </button>
  )
}

export default LangToggle

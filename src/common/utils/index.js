import { allLocales } from './IntlUtils'

export const getDefaultLanguage = () => {
  let locale = window.localStorage.getItem('locale')
  locale = allLocales.includes(locale) ? locale : null
  locale =
    locale || (navigator.language || navigator.userLanguage).split('-')[0]
  return locale
}

export const saveLanguage = locale => {
  window.localStorage.setItem('locale', locale)
}

import React from 'react'

const defaultValue = {
 locale: "en"
}

export const { Provider, Consumer } = React.createContext(defaultValue)
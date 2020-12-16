import React from 'react'
import ReactDOM from 'react-dom'
import './GlobalStyle'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import * as serviceWorker from './serviceWorker'
import { GlobalStyle } from './GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ThemeProvider theme = {theme}>
        <GlobalStyle/>
        <App/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()

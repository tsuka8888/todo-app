import React from 'react'
import { Header } from './organisms/Header'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@material-ui/core'
import { Router } from './router'

const theme = createTheme()

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <>
            <Router />
          </>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App

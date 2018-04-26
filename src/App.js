import React from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import configureStore from './store/configureStore'
import { Provider as ReduxProvider } from 'react-redux'
import { LayoutContainer } from './scenes/Layout'
import { history } from './store/history'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import { createMuiTheme } from 'material-ui'

// verificar -> const store = persist(configureStore)()

// Verificar los colores
// const colors = {
//   darkBlue: '#039be5',
//   opaqueGreen: '#7CB342'
// }
// const muiTheme = createMuiTheme({
//   palette: {
//     primary: colors.darkBlue,
//     secondary: colors.opaqueGreen
//   }
// })

const store = configureStore

const App = () => (
  <ReduxProvider store={store}>
    {/* <MuiThemeProvider muiTheme={muiTheme}> */}
    <Router history={history}>
      <LayoutContainer />
    </Router>
    {/* </MuiThemeProvider> */}
  </ReduxProvider>
)

export default App

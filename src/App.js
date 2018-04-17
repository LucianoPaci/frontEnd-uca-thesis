import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import client from './client' // ?? No borrar, puede servir de ejemplo
import './App.css'
import { Link, Router, Route, Redirect, Switch, Prov } from 'react-router-dom'
import store from './store'
import { Provider as ReduxProvider } from 'react-redux'
import * as request from 'browser-request'
import Layout from './scenes/Layout/Layout'
import HomePage from './scenes/Home/HomePage'
import ProfilePage from './scenes/Profile/ProfilePage'
import ProjectPage from './scenes/Project/ProjectPage'
import LoginPage from './scenes/Login/LoginPage'
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

const App = () => (
  <ReduxProvider store={store}>
    {/* <MuiThemeProvider muiTheme={muiTheme}> */}
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/project' component={ProjectPage} />
          <Route path='/project/create' component={ProjectPage} />{' '}
          {/*Aca deberia ir al form de creacion de proyecto*/}
        </Switch>
      </Layout>
    </Router>
    {/* </MuiThemeProvider> */}
  </ReduxProvider>
)

export default App

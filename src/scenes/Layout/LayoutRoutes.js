import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import { MainPageRoutes } from '../MainPage'
import { ProjectRoutes } from '../ProjectPage'
import { Paper, TextField, Card } from 'material-ui'
import { RegistrationPageContainer } from '../RegistrationPage'

const LayoutRoutes = () => (
  <Switch>
    <Route
      // exact
      path='/mainpage'
      render={(props) => <MainPageRoutes {...props} />}
    />

    <Route
      // exact
      path='/project'
      render={(props) => <ProjectRoutes {...props} />}
    />
    <Route
      // exact
      path='/registration'
      render={(props) => <RegistrationPageContainer {...props} />}
    />
    <Route path='*' render={(props) => <Redirect to='/mainpage/home' />} />
  </Switch>
)
export default LayoutRoutes

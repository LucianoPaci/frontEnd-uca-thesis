import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { HomePageContainer } from './HomePage'
import { ProfilePageContainer } from './ProfilePage'

const MainPageRoutes = ({ match }) => (
  <Switch>
    <Route
      exact
      path={match.url + '/home'}
      render={(props) => <HomePageContainer {...props} />}
    />

    <Route
      exact
      path={match.url + '/profile'}
      render={(props) => <ProfilePageContainer {...props} />}
    />
  </Switch>
)

export default MainPageRoutes

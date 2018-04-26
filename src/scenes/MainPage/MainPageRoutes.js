import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { HomePageContainer } from './HomePage'
import { ProfilePageContainer } from './ProfilePage'

const MainPageRoutes = () => {
  <Switch>
    <Route
      exact
      path='/api/principal'
      render={(props) => <HomePageContainer {...props} />}
    />

    <Route
      exact
      path='api/profile'
      render={(props) => <ProfilePageContainer {...props} />}
    />
  </Switch>
}

export default MainPageRoutes

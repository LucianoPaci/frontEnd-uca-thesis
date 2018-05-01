import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ProjectFormContainer } from './ProjectForm'

const ProjectRoutes = ({ match }) => (
  <Switch>
    <Route
      exact
      path={match.url + '/create'}
      render={(props) => <ProjectFormContainer {...props} />}
    />
  </Switch>
)

export default ProjectRoutes

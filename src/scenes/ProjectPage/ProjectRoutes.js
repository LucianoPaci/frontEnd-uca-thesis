import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ProjectFormContainer } from './ProjectForm'

const ProjectRoutes = () => {
  ;<Switch>
    <Route
      exact
      path='/api/project/create'
      render={(props) => <ProjectFormContainer {...props} />}
    />
  </Switch>
}

export default ProjectRoutes

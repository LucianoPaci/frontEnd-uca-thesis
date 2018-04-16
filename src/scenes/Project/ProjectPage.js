import React, { Fragment, Component } from 'react'
import ProjectForm from './projectForm/ProjectForm'
import { Paper } from 'material-ui'

class ProjectPage extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <Paper>
        <ProjectForm />
      </Paper>
    )
  }
}

export default ProjectPage

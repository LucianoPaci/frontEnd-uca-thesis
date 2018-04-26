import React, { Component } from 'react'
import ProjectForm from './ProjectForm/ProjectForm' // Verificar si anda. Puede que no debido al index. Checkear como trae el LoginPageContainer a LoginPage
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

import { connect } from 'react-redux'
import ProjectForm from './ProjectForm'
import { postProject } from './actions'

const mapStateToProps = (state, ownProps) => {
  const { isSearching, projectDetails, allProjects } = state.projectForm
  const { user } = state.loginPage

  return {
    isSearching,
    projectDetails,
    allProjects,
    user
  }
}

const mapDispatchToProps = {
  postProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)

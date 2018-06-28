import { connect } from 'react-redux'
import ProjectForm from './ProjectForm'
import { postProject, getAllSkills } from './actions'

const mapStateToProps = (state, ownProps) => {
  const {
    isSearching,
    projectDetails,
    allProjects,
    allSkills
  } = state.projectForm
  const { user } = state.loginPage

  return {
    isSearching,
    projectDetails,
    allProjects,
    user,
    allSkills
  }
}

const mapDispatchToProps = {
  postProject,
  getAllSkills
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)

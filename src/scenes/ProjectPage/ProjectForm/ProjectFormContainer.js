import { connect } from 'react-redux'
import ProjectForm from './ProjectForm'
import { postProject } from './actions'

const mapStateToProps = (state, ownProps) => {
  const { isSearching, projectDetails, projects } = state

  return {
    isSearching,
    projectDetails,
    projects
  }
}

const mapDispatchToProps = {
  postProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)

import ProjectForm from './ProjectForm' // Verificar si anda. Puede que no debido al index. Checkear como trae el LoginPageContainer a LoginPage
import { postProject } from './ProjectForm/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const { allProjects, projectDetail } = state.projectForm

  return {
    allProjects,
    projectDetail
  }
}

const mapDispatchToProps = {
  postProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)

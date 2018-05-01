import { connect } from 'react-redux'
import HomePage from './HomePage'
import { getAllProjects } from './actions'

const mapStateToProps = (state, ownProps) => {
  // No se si esta bien, pero es como lo pude solucionar
  const { projects, isFetching } = state.homePage

  return {
    projects,
    isFetching
  }
}
const mapDispatchToProps = {
  getAllProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

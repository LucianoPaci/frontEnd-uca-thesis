import { connect } from 'react-redux'
import ProfilePage from './ProfilePage'
import { getAllUserProjects } from './actions'

const mapStateToProps = (state, ownProps) => {}

const mapDispatchToProps = {
  getAllUserProjects
  // getUserData
}

export default connect(null, mapDispatchToProps)(ProfilePage)

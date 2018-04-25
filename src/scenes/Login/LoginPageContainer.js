import { login } from './actions'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'

const mapStateToProps = (state, ownProps) => {
  const { auth: { user }, loggingIn, loginError } = state

  return {
    user,
    loggingIn,
    loginError
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

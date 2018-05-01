import { tryLogin } from './actions'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'

const mapStateToProps = (state, ownProps) => {
  const { user, loggingIn, loginError } = state.loginPage
  return {
    user,
    loggingIn,
    loginError
  }
}

const mapDispatchToProps = {
  tryLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

import { tryLogin } from './actions'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'

const mapStateToProps = (state, ownProps) => {
  const user = state.LoginPage ? state.LoginPage.user : null
  const loggingIn = state.LoginPage ? state.LoginPage.loggingIn : false
  const loginError = state.LoginPage ? state.LoginPage.loginError : false

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

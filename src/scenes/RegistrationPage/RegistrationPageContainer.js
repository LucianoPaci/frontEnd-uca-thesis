import RegistrationPage from './RegistrationPage'
import { connect } from 'react-redux'
import { trySignIn } from './actions'

const mapStateToProps = (state, ownProps) => {
  const { user, signingIn } = state.registrationPage

  return {
    user,
    signingIn
  }
}

const mapDispatchToProps = {
  trySignIn
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)

import Layout from './Layout'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updatePage } from './actions'
import { logoutAndRedirect } from '../LoginPage/actions'

const mapStateToProps = (state, ownProps) => {
  const { loginPage: { user, loggedIn } } = state

  return {
    router: ownProps.history,
    user
  }
}
const mapDispatchToProps = {
  updatePage,
  logoutAndRedirect
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))

// Este componente contenedor le conecta el state y las actions que ejecutan los dispatch, como props
// al Componente Layout

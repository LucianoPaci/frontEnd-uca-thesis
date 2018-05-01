import Layout from './Layout'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updatePage } from './actions'

const mapStateToProps = (state, ownProps) => {
  const { user, loggedIn } = state

  return {
    loggedIn: !!user,
    // loggedIn: false,
    router: ownProps.history
  }
}
const mapDispatchToProps = {
  updatePage
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))

// Este componente contenedor le conecta el state y las actions que ejecutan los dispatch, como props
// al Componente Layout

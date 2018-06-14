import React, { PureComponent, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { PropTypes as ptypes } from 'prop-types'
import ButtonAppBar from './components/ButtonAppBar'
// import Grid from 'material-ui/Grid'
// import Paper from 'material-ui/Paper'
// import NestedList from '../components/NestedList'
// import SocialFeedCards from '../components/SocialFeedCards'
import { LoginPage } from '../LoginPage'
import { updateToken, updatePage } from './actions'
import LayoutRoutes from './LayoutRoutes'
// Tendria que acceder al store y preguntar si el user esta logeado
// Si esta logeado, no deberia mostrar el ButtonAppBar

class Layout extends PureComponent {
  static propTypes = {
    loggedIn: ptypes.bool.isRequired
  }

  constructor (props) {
    super()
  }

  render () {
    const { user, children, logoutAndRedirect } = this.props
    console.log('Layout ', user)
    // const loggedIn = !!localStorage.getItem('user')
    return (
      <div className={'rootLayoutDiv'}>
        {!user ? (
          <div className={'contentLayoutDiv'}>
            <Route component={LoginPage} />
          </div>
        ) : (
          <Fragment>
            <ButtonAppBar
              title='UcaApp'
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 40,
                width: '100%'
              }}
              logoutAndRedirect={logoutAndRedirect}
            />

            <LayoutRoutes />
          </Fragment>
        )}

        <div style={{ paddingTop: '120px' }}>{children}</div>
      </div>
    )
  }
}

export default Layout

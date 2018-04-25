import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { PropTypes as ptypes } from 'prop-types'
import ButtonAppBar from '../components/ButtonAppBar'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import NestedList from '../components/NestedList'
import SocialFeedCards from '../components/SocialFeedCards'

import LoginPage from '../Login/LoginPage'
import HomePage from '../Home/HomePage'
// Tendria que acceder al store y preguntar si el user esta logeado
// Si esta logeado, no deberia mostrar el ButtonAppBar

class Layout extends Component {
  static propTypes = {
    loggedIn: ptypes.bool.isRequired
  }

  constructor (props) {
    super()
  }
  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  render () {
    const { loggedIn } = this.props
    return (
      <div className={'rootLayoutDiv'}>
        {!loggedIn ? (
          <div className={'contentLayoutDiv'}>
            <Route component={LoginPage} />
          </div>
        ) : (
          <ButtonAppBar
            title='UcaApp'
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 40,
              width: '100%'
            }}
          />
        )}

        <div style={{ paddingTop: '120px' }}>{this.props.children}</div>
      </div>
    )
  }
}

export default Layout

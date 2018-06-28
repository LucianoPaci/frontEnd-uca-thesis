//@ts-check
import React, { Fragment } from 'react'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
// import AccountCircle from 'mateial-ui-icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu'
import SearchBar from './SearchBar'
import Menu, { MenuItem } from 'material-ui/Menu'

import { userServices } from '../../../services/userServices'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  menuBtn: {
    flexGrow: 0
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  button: {
    color: 'primary'
  },
  searchBarRoot: {
    width: '50%',
    position: 'center',
    paddingLeft: '90px',
    flexGrow: 2
  }
}

class ButtonAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked })
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render () {
    const { logoutAndRedirect } = this.props
    const { auth, anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div style={this.props.style}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='title' color='inherit' style={styles.title}>
              {this.props.title}
            </Typography>
            {auth && (
              <Fragment>
                <div style={styles.searchBarRoot}>
                  <SearchBar />
                </div>

                <div style={styles.menuBtn}>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup='true'
                    onClick={this.handleMenu}
                    color='inherit'
                  >
                    <MenuIcon />
                  </IconButton>

                  <Menu
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem
                      onClick={this.handleClose}
                      component={(props) => (
                        <Link {...props} to='/mainpage/profile' />
                      )}
                    >
                      Profile
                    </MenuItem>

                    <MenuItem
                      onClick={this.handleClose}
                      component={(props) => (
                        <Link {...props} to='/mainpage/home' />
                      )}
                    >
                      Home
                    </MenuItem>
                    <MenuItem onClick={() => logoutAndRedirect()}>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(ButtonAppBar)

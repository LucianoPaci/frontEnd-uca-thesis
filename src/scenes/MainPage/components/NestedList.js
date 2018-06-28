import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import InboxIcon from 'material-ui-icons/MoveToInbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import SendIcon from 'material-ui-icons/Send'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import StarBorder from 'material-ui-icons/StarBorder'
import DateRange from 'material-ui-icons/DateRange'
import School from 'material-ui-icons/School'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
})

class NestedList extends React.Component {
  state = { open: true }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <List component='nav'>
          <ListItem
            button
            component={(props) => <Link {...props} to='/project/create' />}
          >
            <ListItemIcon>
              <School />
            </ListItemIcon>
            <ListItemText inset primary='Proyectos' />
          </ListItem>
          <Divider />
          <ListItem button value={<Link to='www.google.com' />}>
            <ListItemIcon>
              <DateRange />
            </ListItemIcon>
            <ListItemText inset primary='Calendario' />
          </ListItem>
          <Divider />
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary='Inbox' />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary='Starred' />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    )
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NestedList)

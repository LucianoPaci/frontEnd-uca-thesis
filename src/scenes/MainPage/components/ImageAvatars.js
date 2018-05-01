import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import image from '../../../media/images/cat.jpg'
const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 70
  },
  bigAvatar: {
    width: 200,
    height: 200
  }
}

function ImageAvatars (props) {
  const { classes } = props
  return (
    <div className={classes.row}>
      <Avatar
        alt='Catto'
        src={image}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  )
}

export default withStyles(styles)(ImageAvatars)

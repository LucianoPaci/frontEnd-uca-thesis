import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import image from '../../../media/images/cat.jpg'
import _capitalize from 'lodash/capitalize'
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
}

function ProfileCard (props) {
  return (
    <div>
      <CardMedia image={image} title='Catto' />
      <CardContent>
        <Typography gutterBottom variant='headline' component='h1'>
          {_capitalize(props.firstName)} {_capitalize(props.lastName)}
        </Typography>
        <Typography component='p'>{props.username}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          color='secondary'
          onClick={() => {
            alert('Editar!')
          }}
        >
          Editar
        </Button>
        <Button size='small' color='primary'>
          Ayuda
        </Button>
      </CardActions>
    </div>
  )
}

export default ProfileCard

import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/Menu/MenuItem'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import ProjectRequirements from './requirementSelector/ProjectRequirements'
import { Typography } from 'material-ui'
import Button from 'material-ui/Button'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  menu: {
    width: 200
  },

  paper: {
    width: '100%'
  },

  button: {
    margin: theme.spacing.unit
  }
})
const buttonTileStyle = {
  container: {
    boxShadow: ` 'black' 0px 0px 5px`,
    zIndex: '10',
    padding: '10px 0',
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    bottom: '0'
  }
}
const randomKey = () => Math.random().toString()

class ProjectForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      projectRequirements: [
        {
          role: '',
          carreer: '',
          quantity: '',
          key: randomKey()
        }
      ]
    }
  }

  // const requirements = projectRequirements.map(each) => {
  //   return {
  //     role: each.role || '',
  //     carreer: each.carreer || '',
  //     quantity: each.quantity || 0
  //     index
  //   }
  // }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleItemChange = (index, item) => {
    const { projectRequirements } = this.state

    const newRequirements = projectRequirements.slice()

    newRequirements[index] = item

    this.setState({ projectRequirements: newRequirements })
  }

  addNewRequirements = () => {
    const { projectRequirements } = this.state

    const newRequirements = projectRequirements.slice()

    newRequirements.push({
      role: '',
      carreer: '',
      quantity: 0,
      key: randomKey()
    })

    this.setState({ error: false, projectRequirements: newRequirements })
  }

  handleOnRemoveRequirementItem = (index) => {
    const { projectRequirements } = this.state

    const newRequirements = projectRequirements.slice()

    newRequirements.splice(index, 1)

    this.setState({ projectRequirements: newRequirements })
  }

  render () {
    const { classes } = this.props

    console.log(this.state)

    // Tomo el state y lo guardo en una variable para luego hacer un mapeo de los componentes
    // que voy a renderizar

    const { projectRequirements } = this.state

    return (
      <Grid container justify='center' alignItems='center' spacing='40'>
        <Grid item xs={12} md={8} lg={6}>
          <form className={classes.container} noValidate autoComplete='off'>
            <Typography variant='headline' component='h2'>
              {this.state.name}
            </Typography>

            <TextField
              id='name'
              label='Nombre del proyecto'
              value={this.state.name}
              onChange={this.handleNameChange}
              fullWidth
              margin='normal'
            />

            <TextField
              id='description'
              label='Descripción'
              multiline
              rowsMax='20'
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              fullWidth
              style={{
                padding: '0 0 10px 0'
              }}
              margin='normal'
            />

            <Fragment />

            {/* Mapeo el array de objetos con el index del componente(nativo de react) 
            para saber que posicion en el array se debe modificar
            Le paso el objeto completo (ITEM), la key y la funcion handleItemChange.

            Se van a crear componentes de projectRequirements

             */}

            {projectRequirements.map((item, index) => (
              <ProjectRequirements
                key={item.key}
                item={item}
                index={index}
                onItemChange={this.handleItemChange}
                onItemRemoval={this.handleOnRemoveRequirementItem}
              />
            ))}
          </form>

          <div style={buttonTileStyle.container}>
            <Button
              variant='rounded'
              color='secondary'
              onClick={() => {
                let data = JSON.stringify(this.state, null, 2)
                console.log(JSON.stringify(this.state, null, 2))

                // fetch('http://192.168.0.40:5000/', {
                //   mode: 'no-cors',
                //   method: 'POST',
                //   headers: {
                //     Accept: 'application/json',
                //     'Content-Type': 'application/json'
                //   },
                //   body: data
                // }).then((response) => console.log(response))
              }}
            >
              Postear
            </Button>

            <Button
              variant='fab'
              color='primary'
              onClick={this.addNewRequirements}
            >
              +
            </Button>
          </div>
        </Grid>
      </Grid>
    )
  }
}

ProjectForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProjectForm)

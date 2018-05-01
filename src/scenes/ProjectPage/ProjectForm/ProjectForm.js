import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/Menu/MenuItem'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import ProjectRequirements from './requirementSelector/ProjectRequirements'
import { Typography } from 'material-ui'
import Button from 'material-ui/Button'
import { fetchProjects, fetchProjectDetails, postProject } from './actions'
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  form: {
    padding: '140px 20px 20px 20px'
  },

  menu: {
    width: 200
  },

  paper: {
    width: '100%'
  }

  // button: {
  //   margin: theme.spacing.unit
  // }
}
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
      description: ''
      // projectRequirements: [
      //   {
      //     role: '',
      //     carreer: '',
      //     quantity: '',
      //     key: randomKey()
      //   }
      // ]
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

  handleSubmitForm = (event) => {
    event.preventDefault()
    const data = this.state
    this.postEverything()
  }

  postEverything = () => {
    const { name, description } = this.state
    const { postProject } = this.props

    const data = {
      name,
      description
    }

    postProject(data)
  }

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
    const { isSearching, projectDetails, projects } = this.props

    // Tomo el state y lo guardo en una variable para luego hacer un mapeo de los componentes
    // que voy a renderizar

    // const { projectRequirements } = this.state

    return (
      <Grid container justify='center' alignItems='center' spacing='40'>
        <Grid item xs={12} md={8} lg={6}>
          <form
            noValidate
            autoComplete='off'
            style={styles.form}
            onSubmit={this.handleSubmitForm}
          >
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

            {/* A continuacion se agrega el componente de Requerimientos */}

            {/* {projectRequirements.map((item, index) => (
              <ProjectRequirements
                key={item.key}
                item={item}
                index={index}
                onItemChange={this.handleItemChange}
                onItemRemoval={this.handleOnRemoveRequirementItem}
              />
            ))} */}

            <div style={buttonTileStyle.container}>
              <Button
                type='submit'
                variant='rounded'
                color='secondary'
                onClick={() => {
                  let data = JSON.stringify(this.state, null, 2)
                }}
              >
                Postear
              </Button>
            </div>
          </form>
          {/* <Button
              variant='fab'
              color='primary'
              onClick={this.addNewRequirements}
            >
              +
            </Button> */}
        </Grid>
      </Grid>
    )
  }
}

// const mapDispatchToProps = {
//   postProject
// }

// function mapStateToProps (state) {
//   const { projectForm: { isSearching, projectDetails, projects } } = state

//   return {
//     isSearching,
//     projectDetails,
//     projects
//   }
// }

// export default connect(mapDispatchToProps)(withStyles(styles)(ProjectForm))
// export default connect(null, mapDispatchToProps)(ProjectForm)
export default ProjectForm

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
// import CrossIcon from 'material-ui/svg-icons/navigation/close'

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },

  crossIcon: {
    cursor: 'pointer',
    float: 'right',
    marginTop: 31
  }
})
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
      // width: 100
    }
  }
}

class ProjectRequirements extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      role: '',
      carreer: '',
      quantity: 0
    }
  }
  // Se usa la funcion changeInfo (del padre) y se

  handleRoleChange = (event) => {
    this.changeInfo({ role: event.target.value })
  }
  handleCarreerChange = (event) => {
    this.changeInfo({ carreer: event.target.value })
  }

  handleQuantityChange = (event) => {
    this.changeInfo({ quantity: event.target.value })
  }

  // Esta funcion es la que maneja el cambio de info en los select.
  // Usa la funcion 'onItemChange' heredada de ProjectForm
  // El objeto que la invoca le pasa como parametros a la funcion:
  // * EL OBJETO ITEM
  // * EL INDEX DEL COMPONENTE QUE LA ESTA LLAMANDO
  // * LA FUNCION QUE PROVOCA EL CAMBIO. EL HIJO LE PASA LOS PARAMETROS A LA FUNCION ESTA, Y
  //    EL PADRE LA EJECUTA
  // -> SE LE PASA UN NUEVO OBJETO QUE VA A REEMPLAZAR EL STATE DEL PADRE , DONDE SE MERGEA
  //  EL OBJETO QUE TENIA CON EL OBJETO "DELTA" (con lo que se modifico)

  changeInfo = (delta) => {
    const { item, index, onItemChange } = this.props

    onItemChange(index, { ...item, ...delta })
  }

  render () {
    const { classes, item, onItemRemoval, index } = this.props

    // console.log(this.state.role, this.state.carreer, this.state.quantity)
    const { role, carreer, quantity } = this.state

    const quantityNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

    return (
      <form className={classes.root} autoComplete='off'>
        {/* Cantidad Select */}

        <FormControl className={classes.formControl}>
          <InputLabel shrink={true}>Cantidad</InputLabel>
          <Select
            autowidth={true}
            value={item.quantity}
            onChange={this.handleQuantityChange}
            input={<Input name='quantity' id='quantity-helper' />}
            MenuProps={MenuProps}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {quantityNumbers.map((qtyNum) => (
              <MenuItem key={qtyNum} value={qtyNum}>
                {qtyNum}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Alumno/Profesor Select */}
        <FormControl className={classes.formControl}>
          <InputLabel shrink={true}>Alumno/Profesor</InputLabel>
          <Select
            autowidth={true}
            value={item.role}
            onChange={this.handleRoleChange}
            input={<Input name='name' id='name-helper' />}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'alumno'}>Alumno</MenuItem>
            <MenuItem value={'profesor'}>Profesor</MenuItem>
          </Select>
        </FormControl>

        {/* Career/Speciality Select */}
        <FormControl className={classes.formControl}>
          <InputLabel shrink={true}>Carrera/Especialidad</InputLabel>
          <Select
            value={item.carreer}
            onChange={this.handleCarreerChange}
            input={<Input name='carreer' id='carreer-helper' />}
            displayEmpty
            name='carreer'
            className={classes.selectEmpty}
          >
            <MenuItem value=''>
              <em>None</em>
              {/* Los items de la lista son provistos por el backend */}
            </MenuItem>
            <MenuItem value={'ing_informatica'}>Ing.Informática</MenuItem>
            <MenuItem value={'ing_electronica'}>Ing.Electrónica</MenuItem>
            <MenuItem value={'ing_civil'}>Ing.Civil</MenuItem>
            <MenuItem value={'ing_industrial'}>Ing.Industrial</MenuItem>
            <MenuItem value={'ing_ambiental'}>Ing.Ambiental</MenuItem>
          </Select>
        </FormControl>

        <IconButton
          className={classes.button}
          aria-label='Delete'
          enabled
          color='secondary'
          onClick={index === 0 ? false : () => onItemRemoval(index)}
        >
          <DeleteIcon />
        </IconButton>

        {/* <DeleteIcon style={styles.crossIcon} /> */}

        {/* <FormControl className={classes.formControl} disabled>
          <InputLabel htmlFor="name-disabled">Name</InputLabel>
          <Select
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input name="name" id="name-disabled" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="hai">Hai</MenuItem>
            <MenuItem value="olivier">Olivier</MenuItem>
            <MenuItem value="kevin">Kevin</MenuItem>
          </Select>
          <FormHelperText>Disabled</FormHelperText>
        </FormControl> */}

        {/*  */}
      </form>
    )
  }
}

ProjectRequirements.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProjectRequirements)

/* eslint-disable react/prop-types */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Input from 'material-ui/Input'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/Menu/MenuItem'
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown'
import CancelIcon from 'material-ui-icons/Cancel'
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp'
import ClearIcon from 'material-ui-icons/Clear'
import Chip from 'material-ui/Chip'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

// skillSelector invoca a SelectWrapped, el que llama a Option, el que llama a MenuItem

class Option extends React.Component {
  handleClick = (event) => {
    this.props.onSelect(this.props.option, event)
  }

  render () {
    const { children, isFocused, isSelected, onFocus } = this.props

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component='div'
        style={{
          fontWeight: isSelected ? 700 : 400
        }}
      >
        {children}
      </MenuItem>
    )
  }
}

function SelectWrapped (props) {
  const { classes, ...other } = props

  return (
    <Select
      optionComponent={Option}
      noResultsText={<Typography>{'No results found'}</Typography>}
      arrowRenderer={(arrowProps) => {
        return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
      }}
      clearRenderer={() => <ClearIcon />}
      valueComponent={(valueProps) => {
        const { value, children, onRemove } = valueProps

        const onDelete = (event) => {
          event.preventDefault()
          event.stopPropagation()
          onRemove(value)
        }

        if (onRemove) {
          return (
            <Chip
              tabIndex={-1}
              label={children}
              className={classes.chip}
              deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
              onDelete={onDelete}
            />
          )
        }

        return <div className='Select-value'>{children}</div>
      }}
      {...other}
    />
  )
}

const ITEM_HEIGHT = 48

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
})

class SkillSelector extends React.Component {
  constructor (props) {
    super(props)
  }
  // Pasar de String a Array de Objetos. Esto va para el state del padre
  // handleSkillChange = (e) => {
  //   let idArray, skillsArray
  //   let { allSkills } = this.props
  //   if (e) {
  //     idArray = e.split(',')

  //     skillsArray = idArray.map((id) => {
  //       let foundSkill = allSkills.skills.find(function (eachSkill) {
  //         return eachSkill.id == id
  //       })
  //       return foundSkill
  //     })
  //   }
  //   this.props.onSkillChange(skillsArray)
  // }

  handleSkillChange = (e) => {
    this.props.onSkillChange(e)
  }

  render () {
    const { classes, skills, onSkillChange, allSkills } = this.props
    const map = (skill) => ({
      label: skill.description,
      value: skill.id
    })
    return (
      <div className={classes.root}>
        <Input
          fullWidth
          inputComponent={SelectWrapped}
          onChange={this.handleSkillChange}
          value={skills}
          // value={skills.map((each) => each.join(','))} // Aca pasamos el array de objetos a un array de strings(skill.id)
          placeholder='Seleccionar habilidades'
          name='react-select-chip'
          inputProps={{
            classes,
            multi: true,
            instanceId: 'react-select-chip',
            id: 'react-select-chip',
            simpleValue: true,
            options: (allSkills.skills || []).map(map)
          }}
        />
      </div>
    )
  }
}

SkillSelector.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SkillSelector)

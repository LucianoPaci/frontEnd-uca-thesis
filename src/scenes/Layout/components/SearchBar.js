import React, { PureComponent, Fragment } from 'react'
import { TextField, Paper, Input } from 'material-ui'
import SearchIcon from 'material-ui-icons/Search'
import { InputAdornment } from 'material-ui/Input'
const styles = {
  searchContainer: {
    margin: 'auto 16px',
    width: '70%',
    float: 'center'
  },
  textField: {
    width: '100%'
  }
}

class SearchBar extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      focus: false,
      active: false,
      value: this.props.value
    }
  }
  render () {
    return (
      <Fragment style={styles.root}>
        <Paper style={styles.searchContainer}>
          <Input
            id='name'
            label='Name'
            // value={this.state.name}
            // onChange={this.handleChange('name')}
            endAdornment={
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            }
            style={styles.textField}
            margin='normal'
          />
        </Paper>
      </Fragment>
    )
  }
}
export default SearchBar

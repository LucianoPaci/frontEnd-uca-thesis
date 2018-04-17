import createMuiTheme from 'material-ui/styles/createMuiTheme'
import { lightblue, red } from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: lightblue,
    type: 'dark'
  }
})

export default theme

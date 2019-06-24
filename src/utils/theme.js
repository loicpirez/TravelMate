import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
// import lightlue from '@material-ui/core/colors/lightlue'

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ffffff'
    }
  },
  status: {
    danger: 'purple'
  }
}))

export default theme

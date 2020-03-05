import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  typography:{
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    body1: {
    },
    h1: {
      
    }
  },
  mixins: {
    gutters: () => ('10rem')
  },
  palette: {
    ss: {
      darkSectionBG: 'rgb(55,55,70)',
      darkSectionColor: 'rgb(240,240,240)'
    }
  },
});
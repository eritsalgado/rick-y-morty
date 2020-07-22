import {createMuiTheme} from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'
import teal from '@material-ui/core/colors/teal'


const theme = createMuiTheme({
    palette:{
        primary: {
            light: cyan[50],
            main: cyan[100],
            dark: cyan[200],
            contrastText: '#00695f'
        },
        secondary: {
            light: teal[300],
            main: teal[500],
            dark: teal[700],
            contrastText: '#FFF'
        },
        default: {
            light: '#eeff41',
            main: '#c6ff00',
            dark: '#aeea00',
            contrastText: '#000'
        }
    }
})

export default theme;
import React from 'react'
import {Link} from 'react-router-dom'
import {
    Grid,
    Box,
    makeStyles, 
    withWidth,
    Button
} from '@material-ui/core'
import background_trone from '../assets/img/trone.jpg'

const background = `url(${background_trone})`
const estilos = makeStyles(theme => ({
    container: {
        paddingLeft: 0,
        paddingRight: 0,
        backgroundImage: background,
        backgroundAttachment:' fixed',
        backgroundPosition: 'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    boton_circular: {
        borderRadius: '50%',
        width: 350,
        height: 350,
        fontSize: '2rem',
    }
}))
const SeccionCapitulos = ({personajes, width, todosLosPersonajes}) => {
    const classes = estilos()

    const {boton_circular, container} = classes
    
    const cartas = todosLosPersonajes ? 20 : width === 'lg' ? 7 : 5

    return (
        <Grid container className={container}>
            <Grid item xs={12}>
                <Box align="center" py={10}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={boton_circular}
                        component={Link}
                        to={"/capitulos"}
                    >
                        Ver lista de capitulos
                    </Button>
                </Box>                
            </Grid>
        </Grid>
    )
}

export default withWidth()(SeccionCapitulos)
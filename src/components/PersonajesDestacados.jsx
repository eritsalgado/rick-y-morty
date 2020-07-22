import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {
    Grid,
    Box,
    Typography,
    makeStyles,
    Button
} from '@material-ui/core'
import ListaPersonajes from './Listas/ListaPersonajes'

import { ApiContext } from '../context/ApiContext'

const estilos = makeStyles(theme => ({
    section:{
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.main,
    },
    container: {
        padding: '30px 16px 0 16px'
    }
}))

const PersonajesDestacados = () => {
    const { personajes } = useContext(ApiContext)
    const classes = estilos()

    const {section, container} = classes
    return (
        <Box py={15} className={section}>
            <Box pb={5}>
                <Typography 
                    variant="h3" 
                    align="center"
                >
                    Personajes destacados
                </Typography>
            </Box>
            
            <ListaPersonajes
                personajes={personajes}
            />
            <Grid container className={container}>
                <Button 
                    variant="contained" 
                    color="secondary"
                    size="large"
                    fullWidth
                    component={Link}
                    to="/personajes"
                >
                    Todos los personajes
                </Button>
            </Grid>
            
            
        </Box>   
    )
}

export default PersonajesDestacados

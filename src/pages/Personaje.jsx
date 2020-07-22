import React,{useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { ApiContext } from '../context/ApiContext'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import background from '../assets/img/secret_lab.jpg'

import {
    Box,
    Grid,
    makeStyles,
    Typography,
    Button
} from '@material-ui/core'

const background_image = `url(${background})`

const estilos = makeStyles(theme => ({
    container: {
        padding:'2.5%',
        minHeight: '100vh',
        backgroundImage: background_image,
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
    },
    imagen_de_perfil: {
        borderRadius: '50%',
        width:'100%',
    }
}))

// Maquetación de los pocos datos proporcionados por la API para cada personaje especifico

const Personaje = () => {
    const { personaje, getPersonaje } = useContext(ApiContext)
    let { id } = useParams();
    const classes = estilos()
    const {container, imagen_de_perfil} = classes
    
    useEffect(()=> {
        getPersonaje(id)
    },[id])
    return (
        <Grid container className={container}>
            <Grid item xs={12}>
                <Button 
                    variant="contained" 
                    color="secondary"
                    component={Link}
                    to="/personajes"
                >
                    <ArrowBackIosIcon/>
                    Todos los personajes
                </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={4}>
                <Box py={2}>
                    <img 
                        src={personaje.image} 
                        alt="Imagen de perfil"
                        className={imagen_de_perfil}
                    />
                </Box>
                <Box>
                    
                    <Typography 
                            variant="h2" 
                            color="primary"
                            align="center"
                        >
                        {personaje.name}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <Box py={2}>
                    <Typography variant="h5" color="primary">
                        Especie: {personaje.species}
                    </Typography>
                    <Typography variant="h5" color="primary">
                        Tipo: {personaje.type === "" ? 'Unknown' : personaje.type}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <Box py={2}>
                    <Typography variant="h5" color="primary">
                        Genero: {personaje.gender}
                    </Typography>
                    <Typography variant="h5" color="primary">
                        Ubicación: {personaje.location ? personaje.location.name : null}
                    </Typography>
                    <Typography variant="h5" color="primary">
                        Estatus: {personaje.status}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Personaje

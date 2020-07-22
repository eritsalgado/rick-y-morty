import React from 'react'
import video from '../assets/video/rick-and-morty-season-2-promo-15.mp4'

import PersonajesDestacados from '../components/PersonajesDestacados'
import SeccionCapitulos from '../components/SeccionCapitulos'

import {
    Box,
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core'


const estilos = makeStyles(theme => ({
    header: {
        width:'100%',
        height:'90vh',
        overflow:'hidden',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('xs')]: {
            height: '90vh',
        }
    },
    video_bg: {
        position:'absolute',
        top: 0,
        left: 0,
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        PointerEvent:'none',
    },
    body_content:{
        position: 'relative',
        zIndex:1,
        maxWidth:'1000px',
        margin: '0 auto',
        textAlign: 'center',
        color:'cyan',
        textShadow:'2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 2px 2px #6AEA21, -2px -2px 10px #6AEA21, 2px -2px 10px #6AEA21, -2px 2px 10px #6AEA21'

    }
}))

const Principal = () => {
    const classes = estilos()
    const {header, video_bg, body_content} = classes

    return (
        <div>
            <Grid container>
                <Grid item xs={12} className={header}>
                        <video className={video_bg} autoPlay muted loop>
                            <source
                                src={video}
                                type='video/mp4'
                            />
                        </video>
                        <Box className={body_content}>
                            <Typography variant="h3">
                                Rick y Morty fansite
                            </Typography>
                            <Typography variant="h5">
                                Comedia animada que narra las aventuras 
                                de un científico loco, Rick Sánchez, 
                                que regresa después de 20 años para 
                                vivir con su hija, su marido y sus hijos, 
                                Morty y Summer. 
                            </Typography>
                        </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <PersonajesDestacados/>             
                </Grid>
                <Grid item xs={12} md={6}>
                    <SeccionCapitulos/>        
                </Grid>
            </Grid>
        </div>
    )
}

export default Principal

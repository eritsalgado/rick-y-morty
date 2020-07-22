import React from 'react'
import {
    Grid,
    Box,
    makeStyles,
    Typography
} from '@material-ui/core'

import error_404 from '../assets/img/404.gif'


  
const useStyles = makeStyles(theme => ({
    header: {
        width:'100%',
        height:'100vh',
        overflow:'hidden',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('xs')]: {
            height: '100vh',
        }
    },
    img: {
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


const Error = () => {
    const classes = useStyles()
    
    return (
        <Grid container>
            <Grid item xs={12} className={classes.header}>
                    <img 
                        className={classes.img}
                        src={error_404} 
                        alt="404 not found"
                    />
                    <Box className={classes.body_content}>
                        <Typography variant="h4">
                            ¿que has hecho Morty?! eres muy curioso!, acabas de romper mi aplicación, 
                            ya no seré mas tu abuelo bruuup, ¡todo lo rompes Morty!, 
                            ¡se acabaron las aventuras Mo... Mo.. Mooo.. Morty!!
                        </Typography>
                    </Box>
            </Grid>
        </Grid>
    )
}

export default Error

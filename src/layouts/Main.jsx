import React, { useState } from 'react'
import Navbar from './nav/Navbar'
import Cajon from './nav/Cajon'
import {
    makeStyles, Hidden
} from '@material-ui/core'

const estilos = makeStyles(theme => ({
    root: {
        display:'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
    },
}))

const Contenedor = ({children}) => {

    const classes = estilos()
    const [abrir, setAbrir] = useState(false)

    const accionAbrir = () => {
        setAbrir(!abrir)
    }

    const {root, content, toolbar} = classes
    return (
        <div className={root}>
            <Navbar
                accionAbrir={accionAbrir}
            />
            <Hidden xsDown>
                <Cajon 
                    variant='permanent'
                    open={true}
                />
            </Hidden>
            <Hidden smUp>
                <Cajon 
                    variant='temporary'
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
            <div className={content}>
                <div className={toolbar}></div>
                {children}
            </div>        
        </div>
    )
}

export default Contenedor

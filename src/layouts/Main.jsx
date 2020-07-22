import React, { useState } from 'react'
import Navbar from './nav/Navbar'
import Cajon from './nav/Cajon'
import {
    makeStyles, Hidden
} from '@material-ui/core'

// Creo estilos custom con material ui
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
    // Creo state necesario para el funcionamiento de mi menú en dispositivos moviles
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
            {/* Un menu es visible en dispositivos superiores a los moviles */}
            <Hidden xsDown>
                <Cajon 
                    variant='permanent'
                    open={true}
                />
            </Hidden>
            {/* El segundo menu es invisible en dispositivos moviles, pero tiene 
            la posibilidad de aparecer con los nuevos atributos proporcionados */}
            <Hidden smUp>
                <Cajon 
                    variant='temporary'
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>

            {/* A través de index, se pasa el layout que es todo este script, 
            tambien se pasa un componente, que es el cual se "usa" en la siguiente linea, 
            children sería el componente deseado. */}
            <div className={content}>
                <div className={toolbar}></div>
                {children}
            </div>        
        </div>
    )
}

export default Contenedor

import React,{useContext, useEffect} from 'react'
import {
    Grid,
    Box,
    Typography
} from '@material-ui/core'

import { ApiContext } from '../context/ApiContext'

import ListaPersonajes from '../components/Listas/ListaPersonajes'
import Paginacion from '../components/Paginacion'

const Personajes = () => {
    const { data_pagina, getPaginaDePersonajes } = useContext(ApiContext)

    const buscarPagina = (pagina) => {
        getPaginaDePersonajes(pagina)
    }
    useEffect(()=>{
        getPaginaDePersonajes(1)
    },[])
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h1" color="secondary" align='center'>
                    Lista de personajes
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ListaPersonajes
                    personajes={data_pagina.results ? data_pagina.results : []}
                    todosLosPersonajes={true}
                    xl={2}
                />
            </Grid>
            <Grid item xs={12}>
                <Box align="center">
                    <Paginacion
                        data_pagina={data_pagina}
                        buscarPagina={buscarPagina}
                    />
                </Box>
            </Grid>
        </Grid>
        
    )
}

export default Personajes

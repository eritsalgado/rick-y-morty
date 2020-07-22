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
    // Obteniendo variables y funciones del context padre
    const { data_pagina, getPaginaDePersonajes } = useContext(ApiContext)

    //Funcion para ejecutar funcion proveniente del context padre
    const buscarPagina = (pagina) => {
        getPaginaDePersonajes(pagina)
    }

    // UseEffect, reemplaza a document.ready y didMount, al cargar la página ejecuta una función
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
                    {/* Se llama a un componente que obtendrá una lista, se le proporciona datos para su correcto funcionamiento */}
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

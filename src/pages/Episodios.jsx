import React,{useContext, useEffect} from 'react'
import {
    Grid,
    Typography
} from '@material-ui/core'

import { ApiContext } from '../context/ApiContext'

import ListaEpisodios from '../components/Listas/ListaEpisodios'

const Episodios = () => {
    // Obtener variables y funciones del context padre
    const { data_episodios, getPaginaDeEpisodios } = useContext(ApiContext)

    // Funcion para ejecutar la llamada a la API mediante funcion proveniente del context padre
    const buscarPagina = (pagina) => {
        getPaginaDeEpisodios(pagina)
    }

    // UseEffect, reemplaza a document.ready y didMount, al cargar la página ejecuta una función
    useEffect(()=>{
        getPaginaDeEpisodios(1)
    },[])
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h1" color="secondary" align='center'>
                    Lista de Episodios
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ListaEpisodios
                    episodios={data_episodios.results ? data_episodios.results : []}
                    buscarPagina={buscarPagina}
                />
            </Grid>
        </Grid>
        
    )
}

export default Episodios

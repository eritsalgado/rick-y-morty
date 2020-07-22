import React,{useContext, useEffect} from 'react'
import {
    Grid,
    Typography
} from '@material-ui/core'

import { ApiContext } from '../context/ApiContext'

import ListaEpisodios from '../components/Listas/ListaEpisodios'

const Episodios = () => {
    const { data_episodios, getPaginaDeEpisodios } = useContext(ApiContext)

    const buscarPagina = (pagina) => {
        getPaginaDeEpisodios(pagina)
    }
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

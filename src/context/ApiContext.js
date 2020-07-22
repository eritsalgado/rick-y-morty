import React, {createContext, useState, useEffect} from 'react'
import Axios from 'axios'

export const ApiContext = createContext()

const ApiProvider = (props) =>{

    const [personajes, agregarPersonajes] = useState([])
    const [personaje, modificarPersonaje] = useState({})
    const [data_pagina, actualizarPersonajes] = useState([])
    const [data_episodios, actualizarEpisodios] = useState([])

    useEffect(() =>{
        getPersonajes()
    },[])

    function getPersonajes(){
        Axios.get('https://rickandmortyapi.com/api/character/')
        .then(respuesta => {
            agregarPersonajes( respuesta.data.results )
        })
    }
    function getPersonaje(id){
        Axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(respuesta => {
            modificarPersonaje( respuesta.data )
        })
    }
    function getPaginaDePersonajes(pagina){
        Axios.get(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
        .then(respuesta => {
            actualizarPersonajes( respuesta.data )
        })
    }
    function getPaginaDeEpisodios(pagina){
        Axios.get(`https://rickandmortyapi.com/api/episode/?page=${pagina}`)
        .then(respuesta => {
            actualizarEpisodios( respuesta.data )
        })
    }

    


    return (
        <ApiContext.Provider
            value={{
                personajes,
                personaje, getPersonaje,
                data_pagina, getPaginaDePersonajes,
                data_episodios, getPaginaDeEpisodios
            }}
        >
            {props.children}
        </ApiContext.Provider>
    )
}
export default ApiProvider
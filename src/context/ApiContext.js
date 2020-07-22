import React, {createContext, useState, useEffect} from 'react'
import Axios from 'axios'

export const ApiContext = createContext()

const ApiProvider = (props) =>{

    // Este script contiene todas las llamadas necesarias a la API mediante axios

    // Creo todos los state necesarios e independientes.
    const [personajes, agregarPersonajes] = useState([])
    const [personaje, modificarPersonaje] = useState({})
    const [data_pagina, actualizarPersonajes] = useState([])
    const [data_episodios, actualizarEpisodios] = useState([])

    // Ejecuto el primer script de obtención de personajes para mostrar en la landingpage unos cuantos personajes.
    useEffect(() =>{
        getPersonajes()
    },[])

    // los nombres describen su función.
    function getPersonajes(){
        Axios.get('https://rickandmortyapi.com/api/character/')
        .then(respuesta => {
            // Despues de realizar una llamada mediante axios, actualizar cierto state
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

    


    // las variables y funciones que se pasen por aqui, podrán ser utilizados 
    // en todos los script hijo que lo lleguen a necesitar, tal como Redux.
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
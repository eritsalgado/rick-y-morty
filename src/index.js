import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css'

//Estilos principales de mi tematica en la web
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './css_theme/themeConfig'

//Context, alternativo al uso de Redux, es más sencillo y fácil de adaptar
import ApiProvider from './context/ApiContext'

// Usaré una sola página como plantilla (donde tendré mi barra de navegación)
import Main from "./layouts/Main"

// Secciones de la pagina
import Principal from './pages/Principal'
import Personajes from './pages/Personajes'
import Personaje from './pages/Personaje'
import Episodios from './pages/Episodios'
import Error from './pages/Error'


function App() {
  return (
    // Se definen las rutas permitidas
    <BrowserRouter>  
      <ApiProvider>
        <ThemeProvider theme={theme}>
          <Switch>

            <RouteWrapper exact path="/" component={Principal} layout={Main} />
            <RouteWrapper exact path="/personajes" component={Personajes} layout={Main} />
            <RouteWrapper exact path="/personajes/:pagina" component={Personajes} layout={Main} />
            <RouteWrapper exact path="/personaje/:id" component={Personaje} layout={Main} />
            <RouteWrapper exact path="/capitulos" component={Episodios} layout={Main} />
            

            <RouteWrapper component={Error} layout={Main} />
            
          </Switch>
        </ThemeProvider>
      </ApiProvider>
    </BrowserRouter>
  )
}

// Creo una ruta más accesible, me permite pasar dos parametros, serían un componente y un layout, en caso de tener varios.
function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

render(<App />, document.getElementById('root'))
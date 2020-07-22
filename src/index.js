import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css'

import {ThemeProvider} from '@material-ui/core/styles'
import ApiProvider from './context/ApiContext';
import theme from './css_theme/themeConfig'


import Main from "./layouts/Main";

import Principal from './pages/Principal';
import Personajes from './pages/Personajes';
import Personaje from './pages/Personaje';
import Episodios from './pages/Episodios';


function App() {
  return (
    <BrowserRouter>  
      <ApiProvider>
        <ThemeProvider theme={theme}>
          <Switch>
            <RouteWrapper exact path="/" component={Principal} layout={Main} />
            <RouteWrapper exact path="/personajes" component={Personajes} layout={Main} />
            <RouteWrapper exact path="/personajes/:pagina" component={Personajes} layout={Main} />
            <RouteWrapper exact path="/personaje/:id" component={Personaje} layout={Main} />
            <RouteWrapper exact path="/capitulos" component={Episodios} layout={Main} />
          </Switch>
        </ThemeProvider>
      </ApiProvider>
    </BrowserRouter>
  );
}

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

render(<App />, document.getElementById('root'));
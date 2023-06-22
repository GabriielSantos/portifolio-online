import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//Import Pages
import Certificados from './pages/Certificados';
import Competencias from './pages/Competencias';
import Contato from './pages/Contato';
import Curriculo from './pages/Curriculo';
import Home from './pages/Home';
import Portifolio from './pages/Portifolio';
import Sobre from './pages/Sobre';

import Aside from './components/Aside/Index';


class App extends React.Component {
  render(){
    return (
      <>
      <body data-bs-spy="scroll" data-bs-target="#navbar" tabindex="0">
          <Aside /> 
        <main id="main">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/sobre" component={ Sobre } />
            <Route exact path="/competencias" component={ Competencias } />
            <Route exact path="/certificados" component={ Certificados } />
            <Route exact path="/curriculo" component={ Curriculo } />
            <Route exact path="/portifolio" component={ Portifolio } />
            <Route exact path="/contato" component={ Contato } />
          </Switch>
        </main>
      </body>
      </>
    );
  }
}

export default App;

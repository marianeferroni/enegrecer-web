import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './home/Home';
import Login from '../containers/login/LoginContainer';
import Painel from './layouts/Painel';
import NovaDenuncia from '../containers/denuncias/NovaDenunciaContainer';

const Rotas = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />

    <Route path="/painel">
      <Painel>
        <Route path="/painel/login" component={Login} />
        <Route path="/painel/denuncias/nova" component={NovaDenuncia} />
      </Painel>
    </Route>
  </Switch>
);

export default Rotas;

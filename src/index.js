import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={CadastroVideo} path="/cadastro/video" />
      <Route component={CadastroCategoria} path="/cadastro/categoria" />
      <Route component={() => <div>Página 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

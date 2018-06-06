import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Lienzo from './components/Lienzo/Lienzo';
/* import Platos from './components/Platos/Platos';
import Bebidas from './components/Bebidas/Bebidas'; */
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const RouterLienzo = (
  <BrowserRouter>
    <Route path="/" component={Lienzo} />
  </BrowserRouter>
);

ReactDOM.render(
  RouterLienzo,
  document.getElementById('root')
);

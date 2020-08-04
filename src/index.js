import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './NotFound';
import Sobre from './Sobre';
import Lancamento from './Lancamento';
import * as serviceWorker from './serviceWorker';


import { BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={App} />
        <Route path='/categorias' component={App} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/lancamento' component={Lancamento} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

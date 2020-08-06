import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Sobre from './Pages/Sobre/Sobre';
import Lancamento from './Pages/Lancamentos/Lancamento';
import * as serviceWorker from './serviceWorker';


import { BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/banco' component={Home} />
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

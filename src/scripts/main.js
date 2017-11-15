import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import DemoComponent from './DemoComponent';
import Home from './../scripts/Home/Home.js';
import ReactIntroduction from './../scripts/Topics/ReactIntroduction.js';
import reducers from '../reducers';
import '../styles/styles.scss';
import '../scripts/Home/home.scss';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import SideMenuBar from './../scripts/Home/SideMenuBar.js';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import {  HashRouter as Router } from 'react-router';
// ReactDOM.render(<DemoComponent/>, document.getElementById('react-container'));
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <HashRouter>
      <div>
        <Route exact path="/" component={DemoComponent} />
        <Route path="/home" component={Home} />
        <Route path="/react" component={ReactIntroduction} />
      </div>
   </HashRouter>
  </Provider>
, document.querySelector('body'));
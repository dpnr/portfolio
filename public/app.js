import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import './index.css';
//import the global themes

import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import './theme/globalStyle'; 

ReactDOM.render(
   routes,
 document.getElementById('root')
 );



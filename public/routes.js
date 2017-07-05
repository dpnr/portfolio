import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';


import App from './containers/App/App';
import Aboutme from './containers/Aboutme/Aboutme';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Contacted from './containers/Contact/Contacted';


export default (
    <Router history = {hashHistory}>
        <Route path='/' component={App}>

        <IndexRoute component={Aboutme}/>       
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/contacted' component={Contacted}/>
        </Route>
    </Router>


);

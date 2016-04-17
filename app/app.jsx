import React, { Component } from 'react';
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import Dashboard from 'Dashboard';
import Login from 'Login';
import Main from 'Main';
import MainMenu from 'MainMenu';
import Registration from 'Registration';

ReactDOM.render(
    <Router history={ hashHistory }>
        <Route path='/' component={ Main }>
            <IndexRoute component={ MainMenu } />
            <Route path='register' component={ Registration } />
            <Route path='login' component={ Login } />
        </Route>
    </Router>,
    document.getElementById('app')
);

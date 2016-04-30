import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import Dashboard from 'Dashboard';
import Login from 'Login';
import Main from 'Main';
import Landing from 'Landing';
import Registration from 'Registration';

import reducers from './reducers/index.js';

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);

ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
        <Router history={ hashHistory }>
            <Route path='/' component={ Main }>
                <IndexRoute component={ Landing } />
                <Route path='register' component={ Registration } />
                <Route path='login' component={ Login } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

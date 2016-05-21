import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import Account from 'Account';
import AddListing from 'AddListing';
import App from 'App';
import Dashboard from 'Dashboard';
import Login from 'Login';
import Main from 'Main';
import Landing from 'Landing';
import Listing from 'Listing';
import Listings from 'Listings';
import ReduxModal from 'react-redux-modal';
import Registration from 'Registration';

import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);

ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
        <div>
            <Router history={ hashHistory }>
                <Route path='/' component={ Main }>
                    <IndexRoute component={ Landing } />
                    <Route path='register' component={ Registration } />
                    <Route path='login' component={ Login } />
                    <Route path='app' component={ App }>
                        <Route path='dashboard' component={ Dashboard } />
                        <Route path='listings' component={ Listings } />
                        <Route path='account' component={ Account } />
                        <Route path='add_listing' component={ AddListing } />
                        <Route path='listing/:listingID' component={ Listing } />
                    </Route>
                </Route>
            </Router>
            <ReduxModal />
        </div>
    </Provider>,
    document.getElementById('app')
);

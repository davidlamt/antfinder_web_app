import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { reducer as modalReducer } from 'react-redux-modal';

import listingsReducer from './reducer_listings';
import usersReducer from './reducer_users';

const rootReducer = combineReducers({
    form: formReducer,
    modals: modalReducer,
    listings: listingsReducer,
    users: usersReducer
});

export default rootReducer;

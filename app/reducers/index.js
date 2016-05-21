import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { reducer as modalReducer } from 'react-redux-modal';

import listingReducer from './reducer_listing';
import listingsReducer from './reducer_listings';
import usersReducer from './reducer_users';

const rootReducer = combineReducers({
    form: formReducer,
    modals: modalReducer,
    listing: listingReducer,
    listings: listingsReducer,
    users: usersReducer
});

export default rootReducer;

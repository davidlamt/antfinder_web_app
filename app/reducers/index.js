import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { reducer as modalReducer } from 'react-redux-modal';

import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
    form: formReducer,
    modals: modalReducer,
    users: UsersReducer
});

export default rootReducer;

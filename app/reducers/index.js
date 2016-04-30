import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { reducer as modalReducer } from 'react-redux-modal';

const rootReducer = combineReducers({
    form: formReducer,
    modals: modalReducer
});

export default rootReducer;

import { GET_LISTING, CLEAR_APP_STATE } from '../actions/index';

const INITIAL_STATE = { data: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LISTING:
            return { ...state, data: action.payload.data };
        case CLEAR_APP_STATE:
            return { ...state, data: null };
        default:
            return state;
    }
};

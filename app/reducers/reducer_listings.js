import { SEARCH_LISTINGS, GET_CURRENT_USER_LISTINGS } from '../actions/index';

const INITIAL_STATE = { data: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_LISTINGS:
            return { ...state, data: action.payload.data };
        case GET_CURRENT_USER_LISTINGS:
            return { ...state, myListings: action.payload.data };
        default:
            return state;
    }
};

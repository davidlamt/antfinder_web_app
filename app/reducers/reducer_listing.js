import { GET_LISTING } from '../actions/index';

const INITIAL_STATE = { data: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LISTING:
            return { ...state, data: action.payload.data };
        default:
            return state;
    }
};

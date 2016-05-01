import { AUTHENTICATE_USER, GET_USER_INFO } from '../actions/index';

const INITIAL_STATE = { status: null, info: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return { ...state, status: action.payload.data };
        case GET_USER_INFO:
            return { ...state, info: action.payload.data };
        default:
            return state;
    }
};

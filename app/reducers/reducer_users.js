import { AUTHENTICATE_USER } from '../actions/index';

const INITIAL_STATE = { status: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return { ...state, status: action.payload.data };
        default:
            return state;
    }
};

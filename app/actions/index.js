import axios from 'axios';

const ROOT_URL = (process.env.NODE_ENV === 'production') ? 'https://antfinder-api.herokuapp.com' : 'http://localhost:3000';
// const ROOT_URL = 'https://antfinder-api.herokuapp.com';
// const ROOL_URL = 'http://localhost:3000'; // For local testing

const config = {
    withCredentials: true
};

export const ADD_LISTING = 'ADD_LISTING';
export const CREATE_USER = 'CREATE_USER';
export const GET_USER_INFO = 'GET_USER_INFO';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const CHANGE_USER_PASSWORD = 'CHANGE_USER_PASSWORD';
export const SEARCH_LISTINGS = 'SEARCH_LISTINGS';
export const GET_LISTING = 'GET_LISTING';
export const GET_CURRENT_USER_LISTINGS = 'GET_CURRENT_USER_LISTINGS';
export const DELETE_LISTING = 'DELETE_LISTING';
export const CLEAR_APP_STATE = 'CLEAR_APP_STATE';

export const createUser = props => {
    const { firstName: first_name, lastName: last_name, email, username, password } = props;
    const newUser = { first_name, last_name, email, username, password };

    const request = axios.post(`${ ROOT_URL }/users`, newUser, config);

    return {
        type: CREATE_USER,
        payload: request
    };
};

export const loginUser = props => {
    const { username, password } = props;
    const user = { username, password };

    const request = axios.post(`${ ROOT_URL }/login`, user, config);

    return {
        type: LOGIN_USER,
        payload: request
    };
};

export const logoutUser = () => {
    const request = axios.get(`${ ROOT_URL }/logout`, config);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export const authenticateUser = () => {
    const request = axios.get(`${ ROOT_URL }/authenticate`, config);

    return {
        type: AUTHENTICATE_USER,
        payload: request
    };
};

export const getUserInfo = () => {
    const request = axios.get(`${ ROOT_URL }/user`, config);

    return {
        type: GET_USER_INFO,
        payload: request
    };
};

export const changeUserPassword = (oldPassword, password) => {
    const request = axios.put(`${ ROOT_URL }/users`, { oldPassword, password }, config);

    return {
        type: CHANGE_USER_PASSWORD,
        payload: request
    };
};

export const addListing = newListing => {
    const request = axios.post(`${ ROOT_URL }/listings`, newListing, config);

    return {
        type: ADD_LISTING,
        payload: request
    };
};

export const searchListings = (listing_type, query) => {
    const request = axios.get(`${ ROOT_URL }/listings?listing_type=${ listing_type }&query=${ query }`, config);

    return {
        type: SEARCH_LISTINGS,
        payload: request
    };
};

export const getListing = listingID => {
    const request = axios.get(`${ ROOT_URL }/listings/${ listingID }`, config);

    return {
        type: GET_LISTING,
        payload: request
    };
};

export const getMyListings = () => {
    const request = axios.get(`${ ROOT_URL }/listings/current_user`, config);

    return {
        type: GET_CURRENT_USER_LISTINGS,
        payload: request
    };
};

export const deleteListing = listingID => {
    const request = axios.delete(`${ ROOT_URL }/listings/${ listingID }`, config);

    return {
        type: DELETE_LISTING,
        payload: request
    };
};

export const clearAppStates = () => {
    return {
        type: CLEAR_APP_STATE,
        payload: null
    };
}

import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

const config = {
    withCredentials: true
};

export const CREATE_USER = 'CREATE_USER';
export const GET_USER_INFO = 'GET_USER_INFO';
export const LOGIN_USER = 'LOGIN_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

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

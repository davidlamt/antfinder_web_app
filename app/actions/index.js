import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const createUser = props => {
    const { firstName: first_name, lastName: last_name, email, username, password } = props;
    const newUser = { first_name, last_name, email, username, password };

    const request = axios.post(`${ ROOT_URL }/users`, newUser);

    return {
        type: CREATE_USER,
        payload: request
    };
};

export const loginUser = props => {
    const { username, password } = props;
    const user = { username, password };

    const request = axios.post(`${ ROOT_URL }/login`, user);

    return {
        type: LOGIN_USER,
        payload: request
    };
};

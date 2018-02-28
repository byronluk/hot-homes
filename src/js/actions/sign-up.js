import axios from 'axios';

export function createUser (action) {
    return {
        type: 'CREATE_USER',
        payload: axios.post('/api/users/', action),
    }

};

export function updateSignUp (action) {
    return {
        type: 'UPDATE_SIGN_UP_FORM',
        payload: action,
    }
}
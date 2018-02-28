export function Login (input) {

    return {
        type: 'USER-LOGIN',
        payload: axios.get('/api/users/', action)
    }

};


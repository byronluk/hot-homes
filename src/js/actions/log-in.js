export function updateLogIn (input) {

    return {
        type: 'USER-LOGIN',
        payload: axios.get('/api/users/', action)
    }

};


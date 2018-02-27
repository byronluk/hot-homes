export function createUser (action) {

    return {
        type: 'CREATE_USER',
        payload: action,
    }

};

export function updateSignUp (action) {
    return {
        type: 'UPDATE_SIGN_UP_FORM',
        payload: action,
    }
}
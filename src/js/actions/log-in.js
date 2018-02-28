export function updateLogIn (action) {
  return {
      type: 'UPDATE_LOG_IN_FORM',
      payload: action,
  }
}

export function logIn(input) {
  return {
    type: 'USER-LOGIN',
    payload: axios.get('/api/users/', action)
  }
};




import axios from 'axios';

export function updateLogIn(name, value) {
  return {
    type: 'UPDATE_LOG_IN_FORM',
    name,
    value,
  };
}

export function logIn(user) {
  return {
    type: 'LOGGED_IN',
    user,
  };
}

export const closeHiddenFields = () => {
  return {
    type: 'CANCEL_SIGN_UP',
  };
};

function passwordValidationFailed() {
  return {
    type: 'PASSWORD_VALIDATION_FAILED',
  };
}

function authenticationFailed() {
  return {
    type: 'AUTHENTICATION_FAILED',
  };
}

function updateUserProperties(properties) {
  return {
    type: 'USER_PROPERTIES',
    properties,
  };
}
//  database calls
export function validateAndSubmit() {
  return (dispatch, getState) => {
    const { emailOrUsername, password } = getState().logIn;

    if (password.length < 8) {
      return dispatch(passwordValidationFailed());
    }
    axios
      .get('./api/users')
      .then(data => {
        var user = isMatching(data.data, emailOrUsername, password);
        if (user.properties) {
          dispatch(getUserProperties(user));
        }
        if (user.hasOwnProperty('firstName')) {
          delete user.password;
          return dispatch(logIn(user));
        } else {
          return dispatch(authenticationFailed());
        }
      });
  };
}

function getUserProperties({ id }) {
  return (dispatch) => {
    axios
      .get(`./api/properties?filter[where][userId]=${id}`)
      .then(properties => {
        dispatch(updateUserProperties(properties.data));
      });
  };
}

//  helper function check for match in database
function isMatching(data, name, password) {
  for (let i = 0; i < data.length; i++) {
    let entry = data[i];
    if ((entry.email == name ||
      entry.username == name) &&
      entry.password == password) {
      return entry;
    }
  }
  return false;
}

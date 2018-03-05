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

function updateUserReservations(reservations) {
  return {
    type: 'USER_RESERVATIONS',
    reservations,
  };
}

function UpdateReservationDetails(propertyDetails) {
  return {
    type: 'USER_RESERVATIONS_DETAILS',
    propertyDetails,
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
        if (user.isLandlord) {
          dispatch(getUserProperties(user));
        }
        if (user.hasOwnProperty('firstName')) {
          delete user.password;
          dispatch(getUserReservations(user));
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

export function getUserReservations({ username }) {
  return (dispatch) => {
    axios
      .get(`./api/reservations?filter[where][username]=${username}`)
      .then(reservations => {
        dispatch(updateUserReservations(reservations.data));
        dispatch(getReservationPropertyDetails(reservations.data));
      });
  };
}

function getReservationPropertyDetails(reservations) {
  return (dispatch) => {
    var queryString = '';
    for (var i = 0; i < reservations.length; i++) {
      queryString += `filter[where][or][${i}][id]=${reservations[i].propertyID}&`;
    }
    axios
      .get(`./api/properties/?${queryString}`)
      .then(propertyDetails => {
        dispatch(UpdateReservationDetails(propertyDetails.data));
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

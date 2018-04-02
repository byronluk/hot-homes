import axios from 'axios';
import { reset } from 'redux-form';

export const toggleHidden = (name, value) => {
  return {
    type: 'TOGGLE_HIDDEN',
    name,
    value
  };
};

export const createUser = values => {
  const { email, password } = values;
  return dispatch => {
    axios
      .post('/api/customUsers', values)
      .then(response => {
        if (response.status === 200) {
          dispatch(logIn(email, password));
          dispatch(reset('signUp'));
        }
      })
      .catch(error => {
        if (error) console.log(error);
      });
  };
};

export const logIn = (email, password) => {
  return dispatch => {
    axios
      .post('/api/customUsers/login', { email, password })
      .then(response => {
        if (response.status === 200) {
          const { id, userId } = response.data;
          axios
            .get(`api/customUsers/${userId}`, {
              headers: { Authorization: id }
            })
            .then(response => {
              response.data.accessToken = id;
              dispatch({
                type: 'LOGGED_IN',
                user: response.data
              });
              dispatch(reset('logIn'));
            });
        }
      })
      .catch(error => {
        if (error) console.log(error);
      });
  };
};

export const logOut = () => {
  return (dispatch, getState) => {
    const { accessToken } = getState().auth;
    axios
      .post(`/api/customUsers/logout?access_token=${accessToken}`)
      .then(response => {
        if (response.status === 204) {
          dispatch({
            type: 'LOG_OUT'
          });
        }
      })
      .catch(error => {
        if (error) console.log(error);
      });
  };
};

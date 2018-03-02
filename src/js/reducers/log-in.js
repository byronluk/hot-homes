import initialState from '../initial-state';

function logInReducer(state = initialState.logIn, action) {
  switch (action.type) {

    case 'UPDATE_LOG_IN_FORM': {
      const { name, value } = action;
      return {
        ...state,
        [[name]]: value,
      };
    }

    case 'LOGGED_IN': {
      return initialState.logIn;
    }

    case 'CANCEL_SIGN_UP': {
      return initialState.logIn;
    }

    case 'USER_LOGIN_REJECTED': {
      console.log('invalid email or password');
      return state;
    }

    default: {
      return state;
    }
  }
}

export default logInReducer;

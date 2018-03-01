import initialState from '../initial-state';

function logInReducer(state = initialState.logIn, action) {
  switch (action.type) {

    case 'UPDATE_LOG_IN_FORM': {
      const { name, value } = action.payload;
      return {
        ...state,
        [[name]]: value,
      };
    }

    case 'USER_LOGIN_FULFILLED': {
      const { name, value } = action.payload;
      return {
        ...state,
        [[name]]: value,
        auth: { role: 'user', status: 'login'}
      }

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
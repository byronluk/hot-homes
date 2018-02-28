import initialState from '../initial-state';

export default function logInReducer(state = initialState.logIn, action) {

  switch (action.type) {

    case 'USER_LOGIN_FULFILLED': {
      const { name, value } = action.payload;
      return {
        ...state,
        [[name]]: value,
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
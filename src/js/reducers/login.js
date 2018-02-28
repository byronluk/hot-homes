import initialState from '../initial-state';

export default function loginReducer(state = initialState.signup, action) {

  switch (action.type) {

    case 'UPDATE_LOGIN_FORM': {
      const { name, value } = action.payload;
      return {
        ...state,
        [[name]]: value,
      }
    }

    case 'LOGIN_USER_FULFILLED': {
       
        return {...state, user: action.payload}

    }

    case 'LOGIN_USER_REJECTED': {
      console.log('invalid email or password');
      return state;
    }

    default: {
      return state;
    }
  }
}
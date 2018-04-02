import initialState from '../initialState';

function signUpReducer(state = initialState.signUp, action) {
  switch (action.type) {
    case 'UPDATE_SIGN_UP_FORM': {
      const { name, value } = action.payload;
      return {
        ...state,
        [[name]]: value
      };
    }

    case 'CANCEL_SIGN_UP': {
      return initialState.signUp;
    }

    case 'CREATE_USER_FULFILLED': {
      return initialState.signUp;
    }

    case 'CREATE_USER_REJECTED': {
      console.log('User creation failed');
      return state;
    }

    default: {
      return state;
    }
  }
}

export default signUpReducer;

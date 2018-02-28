
import initialState from '../initial-state';

export default function signupReducer(state = initialState.signup, action) {

  switch (action.type) {

    case 'UPDATE_SIGNUP_FORM': {
      const { name, value } = action.payload;
      return {
        ...state,
        [[name]]: value,
      }
    }

    default: {
      return state;
    }
  }
}
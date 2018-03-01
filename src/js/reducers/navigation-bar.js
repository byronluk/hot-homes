import initialState from '../initial-state';

export default function navBarReducer(state = initialState.navBar, action) {

  switch (action.type) {

    case 'TOGGLE_LOG_IN': {
      return {
        ...state,
        toggleLogIn: action.toggleLogIn,
      }
    }

    case 'TOGGLE_SIGN_UP': {
        return {
          ...state,
          toggleSignUp: action.toggleSignUp,
        }
      }
  

    default: {
      return state;
    }
  }
}
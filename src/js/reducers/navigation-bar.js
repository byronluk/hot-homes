import initialState from '../initial-state';

function navBarReducer(state = initialState.navBar, action) {
  switch (action.type) {

    case 'TOGGLE_HIDDEN': {
      return {
        ...state,
        toggleLogIn: action.toggleLogIn,
      };
    }

    case 'TOGGLE_SIGN_UP': {
      return {
        ...state,
        toggleSignUp: action.toggleSignUp,
      };
    }

    default: {
      return state;
    }
  }
}

export default navBarReducer;


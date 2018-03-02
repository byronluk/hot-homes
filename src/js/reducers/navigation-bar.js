import initialState from '../initial-state';

function navBarReducer(state = initialState.navBar, action) {
  switch (action.type) {

    case 'TOGGLE_HIDDEN': {
      const { name } = action;
      return {
        ...state,
        [[name]]: true,
      };
    }

    case 'LOGGED_IN': {
      return initialState.navBar;
    }

    case 'CREATE_USER': {
      return initialState.navBar;
    }

    case 'CANCEL_SIGN_UP': {
      return initialState.navBar;
    }

    default: {
      return state;
    }
  }
}

export default navBarReducer;


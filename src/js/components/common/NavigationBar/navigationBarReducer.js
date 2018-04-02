import initialState from '../../../initialState';

function navBarReducer(state = initialState.navBar, action) {
  switch (action.type) {
    case 'TOGGLE_HIDDEN': {
      const { name, value } = action;
      return {
        ...state,
        [[name]]: !!value
      };
    }

    case 'LOGGED_IN': {
      return initialState.navBar;
    }

    default: {
      return state;
    }
  }
}

export default navBarReducer;

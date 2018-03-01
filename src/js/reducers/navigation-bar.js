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

    default: {
      return state;
    }
  }
}

export default navBarReducer;


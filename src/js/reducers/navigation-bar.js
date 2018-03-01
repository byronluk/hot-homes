import initialState from '../initial-state';

export default function navBarReducer(state = initialState.navBar, action) {

  switch (action.type) {

    case 'TOGGLE_HIDDEN': {
      return {
        ...state,
        toggleHidden: action.toggleHidden,
      }
    }

    default: {
      return state;
    }
  }
}
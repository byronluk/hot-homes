import initialState from '../initial-state';

export default function homePageReducer(state = initialState.homePage, action) {

  switch (action.type) {

    case 'TOGGLE_LOG_IN': {
      return {
        ...state,
        toggleLogIn: action.toggleLogIn,
      }
    }

    default: {
      return state;
    }
  }
}
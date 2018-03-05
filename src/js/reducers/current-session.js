import initialState from '../initial-state';

function currentSessionReducer(state = initialState.currentSession, action) {
  switch (action.type) {


    case 'LOGGED_IN': {
      return {
        ...state,
        currentUser: action.user.username,

      
      }

    }

    case 'UPDATE_CURRENT_USER': {
      return {
        ...state,
        currentUser: action.payload,
      };
    }

    case 'UPDATE_CURRENT_PROPERTY': {
      return {
        ...state,
        currentProperty: action.payload,
      };
    }

    case 'USER_PROPERTIES': {
      return {
        ...state,
        properties: action.properties,
      };
    }

    default: {
      return state;
    }

  }
}

export default currentSessionReducer;

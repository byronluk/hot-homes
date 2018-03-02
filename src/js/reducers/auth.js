import initialState from '../initial-state';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {

    case 'LOGGED_IN': {
      const { user } = action;
      return {
        ...state,
        status: 'AUTHENTICATED',
        ...user,
      };
    }

    case 'CREATE_USER_FULFILLED': {
      const user = action.payload.data;
      delete user.password;
      return {
        ...state,
        status: 'AUTHENTICATED',
        ...user,
      };
    }

    case 'LOG_OUT': {
      return initialState.auth;
    }

    default: {
      return state;
    }
  }
};

export default authReducer;

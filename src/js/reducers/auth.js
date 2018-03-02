import initialState from '../initial-state';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {

    case 'USER_LOGIN_FULFILLED': {
      const { user } = action;
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

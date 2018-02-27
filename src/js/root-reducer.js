import { combineReducers } from 'redux';
import signupReducer from './reducers/signup';

const reducer = combineReducers({
    signup: signupReducer,

});

export default reducer;
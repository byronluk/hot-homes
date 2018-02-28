import { combineReducers } from 'redux';
import signupReducer from './reducers/signup';
import homePageReducer from './reducers/home-page';

const reducer = combineReducers({
    signup: signupReducer,
    homePage: homePageReducer,

});

export default reducer;
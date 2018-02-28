import { combineReducers } from 'redux';
import signUpReducer from './reducers/sign-up';
import logInReducer from './reducers/log-in';
import homePageReducer from './reducers/home-page';
import searchBarReducer from './reducers/search-bar';
import navBarReducer from './reducers/navigation-bar';

const reducer = combineReducers({
    signUp: signUpReducer,
    logIn: logInReducer,
    homePage: homePageReducer,
    searchBar: searchBarReducer,
    navBar: navBarReducer
});

export default reducer;
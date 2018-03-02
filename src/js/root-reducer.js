import { combineReducers } from 'redux';
import signUpReducer from './reducers/sign-up';
import logInReducer from './reducers/log-in';
import homePageReducer from './reducers/home-page';
import searchBarReducer from './reducers/search-bar';
import rentListingReducer from './reducers/rent-listings';
import navBarReducer from './reducers/navigation-bar';
import currentSessionReducer from './reducers/current-session';
import authReducer from './reducers/auth';
import publishlistingsReducer from './reducers/publish-listings';

const reducer = combineReducers({
    signUp: signUpReducer,
    logIn: logInReducer,
    homePage: homePageReducer,
    searchBar: searchBarReducer,
    rentListings: rentListingReducer,
    navBar: navBarReducer,
    currentSession: currentSessionReducer,
    auth: authReducer,
    publishlistings: publishlistingsReducer
});

export default reducer;

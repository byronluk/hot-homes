import { combineReducers } from 'redux';
import signUpReducer from './reducers/sign-up';
import logInReducer from './reducers/log-in';
import homePageReducer from './reducers/home-page';
import searchBarReducer from './reducers/search-bar';
import rentListingReducer from './reducers/rent-listings';

const reducer = combineReducers({
    signUp: signUpReducer,
    logIn: logInReducer,
    homePage: homePageReducer,
    searchBar: searchBarReducer,
    rentListings: rentListingReducer,
});

export default reducer;
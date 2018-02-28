import { combineReducers } from 'redux';
import signUpReducer from './reducers/sign-up';
import homePageReducer from './reducers/home-page';
import searchBarReducer from './reducers/search-bar';

const reducer = combineReducers({
    signUp: signUpReducer,
    homePage: homePageReducer,
    searchBar: searchBarReducer,
});

export default reducer;
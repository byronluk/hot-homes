import { combineReducers } from 'redux';
import signupReducer from './reducers/signup';
import homePageReducer from './reducers/home-page';
import searchBarReducer from './reducers/search-bar';

const reducer = combineReducers({
    signup: signupReducer,
    homePage: homePageReducer,
    searchBar: searchBarReducer,
});

export default reducer;
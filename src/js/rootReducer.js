import { combineReducers } from 'redux';
import searchBarReducer from './components/SearchBar/searchBarReducer';
import rentListingReducer from './reducers/rent-listings';
import navBarReducer from './components/common/NavigationBar/navigationBarReducer';
import currentSessionReducer from './reducers/current-session';
import authReducer from './components/common/authReducer';
import publishListingsReducer from './reducers/publish-listings';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
  rentListings: rentListingReducer,
  currentSession: currentSessionReducer,
  publishListings: publishListingsReducer,
  searchBar: searchBarReducer,
  navBar: navBarReducer,
  auth: authReducer,
  form: formReducer
});

export default reducer;

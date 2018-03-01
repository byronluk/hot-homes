import React from 'react';
import {Router,
  Route,
} from 'react-router-dom';
import history from './history';

import Home from './views/HomePage';
import Listings from './views/ListingsPage/Listings';
import ListingsDetail from './views/ListingsDetailsPage';
import LandlordDashboard from './components/LandlordDashboard/LandlordDashboard';
// import Profile from './views/ProfilePage';
import PublishListings from './views/PublishListingsPage/PublishListings';
 import RentListings from './views/RentListingsPage';

export default class App extends React.Component {
  render() {
    return (
      <Router history={ history }>
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route path='/list' component={Listings} />
          <Route path='/list/:id' component={ListingsDetail} />
          <Route path='/list/:id/:book' component={RentListings} />
          {/* <Route path='/user' component={Profile} /> */}
          <Route path='/user/publish' component={PublishListings} />
        </div>
      </Router>
    );
  }
}

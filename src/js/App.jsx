import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import history from './history';

import Home from './views/HomePage';
import Listings from './views/ListingsPage/Listings';
// import ListingsDetail from './views/ListingsDetailPage';
// import LandlordDashboard from './views/LandlordDashboardPage';
// import Profile from './views/ProfilePage';
// import PublishListings from './views/PublishListingsPage';
// import RentListings from './views/RentListingsPage';

export default class App extends React.Component {
  render() {
    return (
      <Router history={ history }>
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route path='/listings' component={Listings} />
          {/*
            <Route path='/list/:id' component={ListingsDetail} />
            <Route path='/list/:id/:book' component={RentListings} />
            <Route path='/user' component={Profile} />
            <Route path='/user/publish' component={PublishListing} />
          */}
        </div>
      </Router>
    );
  }
}

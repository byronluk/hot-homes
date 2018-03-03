import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import 'bulma/css/bulma.css';

import Home from './views/HomePage';
import Listings from './views/ListingsPage';
import RentListings from './views/RentListingsPage';
import ListingsDetails from './views/ListingsDetailsPage';
import PublishListings from './views/PublishListingsPage';
import Profile from './views/ProfilePage';

export default class App extends React.Component {
  render() {
    return (
      <Router history={ history }>
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/listings' component={Listings} />
          <Route path='/listings/:id' component={ListingsDetails} />
          <Route path='/listings/:id/:book' component={RentListings} />
          <Route path='/user' component={Profile} />
          <Route path='/user/publish' component={PublishListings} />
        </div>
      </Router>
    );
  }
}

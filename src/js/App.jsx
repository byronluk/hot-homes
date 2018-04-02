import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import 'bulma/css/bulma.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import HomePage from './components/HomePage';
import Listings from './views/ListingsPage';
import RentListings from './views/RentListingsPage';
import ListingsDetails from './views/ListingsDetailsPage';
import PublishListings from './views/PublishListingsPage';
import Profile from './views/ProfilePage';
import LandlordDashboard from './views/LandlordDashboardPage';
import NavigationBar from './components/common/NavigationBar';

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <NavigationBar />
          <div className="container">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/listings" component={Listings} />
            <Route path="/listings/:id" component={ListingsDetails} />
            <Route path="/listings/:id/:book" component={RentListings} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/profile/properties" component={LandlordDashboard} />
            <Route path="/profile/publish" component={PublishListings} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

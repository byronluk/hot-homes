import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';

class Listings extends React.Component {
  render() {
    const { searchBar } = this.props;
    return (
      <div className='container'>
        <NavigationBar />
        <h2>Listings Page</h2>
        <div>
          {searchBar.results.length === 0 &&
            <h1>Sorry, no properties are available in this location</h1>}
          {searchBar.results.length > 0 &&
            searchBar.results.map((property, index) => {
              return (
                <Link key={ index } to={'/listings/' + property.id}>
                  <div>
                    <h1>{property.address.street}</h1>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}

Listings.propTypes = {
  searchBar: PropTypes.object,
};

export default Listings;

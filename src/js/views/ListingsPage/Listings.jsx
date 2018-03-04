import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';

class Listings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchBar } = this.props;
    return (
      <div>
        <NavigationBar />
        <div className="main-section">
          {searchBar.results.length === 0 &&
            <h1>Sorry, no properties are available in this location</h1>}
          {searchBar.results.length > 0 &&
            searchBar.results.map((property, index) => {
              return (
                <Link key={ index } to={'/listings/' + property.id}>
                  <div>
                  <img src={ property.description.photoUrl[0] } alt={"Photo of " + property.address.street}/>
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

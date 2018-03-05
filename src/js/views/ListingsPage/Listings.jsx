import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer/Footer';

class Listings extends React.Component {
  render() {
    const { searchBar } = this.props;
    return (
      <div>
        <NavigationBar />
        <div className="main-section">
          {searchBar.results.length === 0 ?
            <h1 className="is-size-4">Sorry, no properties are available in this location</h1> :
            <div className="level">
              <p
                className="is-size-4 level-left">
                {`${searchBar.results.length} listings were found in ${searchBar.currentSearch}`}
              </p>
            </div>}

          <div className="property-wrapper">
              {searchBar.results.length > 0 &&
                searchBar.results.map((property, index) => {
                  return (
                    <div key={index} className="property-item">
                      <Link to={'/listings/' + property.id}>
                        <div>
                          <img
                            className="listing-image"
                            src={property.description.photoUrl[0]}
                            alt="Images of houses"
                          />
                        </div>
                        <div className="has-text-left">
                          <p className="subtitle is-size-6 has-text-weight-bold has-text-black is-uppercase">
                            {`${property.address.street}, ${property.address.city}`}
                          </p>
                          <p className="subtitle is-size-6 is-uppercase has-text-grey">
                            {`$${property.description.price} dollars per month`}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Listings.propTypes = {
  searchBar: PropTypes.object,
};

export default Listings;

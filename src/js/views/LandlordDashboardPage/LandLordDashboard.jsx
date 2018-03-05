import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import NavigationBar from '../../components/NavigationBar';

class LandlordDashboard extends React.Component {
  render() {
    const { currentSession } = this.props;
    const { properties } = currentSession;
    return (
      <div>
        <NavigationBar />
        <div className="main-section">
          <Link to='/profile/publish'>Add new listing</Link>
          {!!properties.length &&
            <Carousel showThumbs={false}>
              {properties.map((property, index) => {
                const { address, description } = property;
                return (
                  <div key={index}>
                    <p
                      className="is-size-4 has-text-white-ter has-text-justified address-title"
                    >
                      {`${address.street}, ${address.city} ${address.state}`}
                      <a className="property-edit-button button">Edit</a>
                    </p>
                    <Link to={'/listings/' + property.id}>
                      {description.photoUrl.length > 0 &&
                        <img
                          src={description.photoUrl[0]}
                          alt="Property image"
                          className="carousel-image"
                        />
                      }
                    </Link>
                    <div className="carousel-description-container">
                      <p>{`${description.description}`}</p>
                      <div className="tags main-info-tags">
                        <span className="tag">{`${description.bedrooms} bedrooms`}</span>
                        <span className="tag">{`${description.bathrooms} bathrooms`}</span>
                        <span className="tag">{`$${description.price} per month`}</span>
                      </div>
                      <hr className="divider" />
                      <p className="amenities-title">Amenities</p>
                      {!!description.amenities.length &&
                        <div className="tags amenity-tags">
                          {description.amenities.map((amenity, index) => {
                            return (
                              <span className="tag is-primary" key={index}>{amenity}</span>
                            );
                          })}
                        </div>
                      }
                    </div>
                  </div>
                );
              })}
            </Carousel>
          }
          {!properties.length &&
            <h2>You current have no listings</h2>}
        </div>
      </div>
    );
  }
}

LandlordDashboard.propTypes = {
  currentSession: PropTypes.object,
};

export default LandlordDashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LandlordDashboard extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <h2>Landlord Dashboard</h2>
        <Link to='/user/publish'>Add new listing</Link>
        {user.properties && user.properties.map((property) => {
          return (
            <div>
              <img src={property.imageSRC} alt={property.name} />
              <h3>{property.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LandlordDashboard;

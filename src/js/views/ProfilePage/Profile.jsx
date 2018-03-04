import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../../components/NavigationBar';

class Profile extends React.Component {
  render() {
    const { auth } = this.props;

    return (
      <div>
        <NavigationBar />

        <div className="main-section">
          <p>{auth.firstName}</p>
          <p>{auth.isLandlord ? 'Landlord' : 'Tenant' }</p>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object,
};

export default Profile;

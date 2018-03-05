import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer/Footer';

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
        <Footer />
      </div>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object,
};

export default Profile;

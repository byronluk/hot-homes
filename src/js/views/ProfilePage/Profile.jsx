import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  render() {
    const { auth, currentSession } = this.props;
    return (
      <div className="main-section">
        <div className="control">
          <p className="title is-inline-block">Hey {auth.firstName}</p>
          <span className="tag is-primary">
            {auth.isLandlord ? 'Landlord' : 'Tenant'}
          </span>
        </div>
        <div className="grid">
          {!!currentSession.reservations.length &&
            currentSession.reservations.map((reservation, index) => {
              const startDate = parseDate(reservation.startDate);
              const endDate = parseDate(reservation.endDate);
              return (
                <div key={index}>
                  <p>
                    From: {startDate} To: {endDate}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

function parseDate(dateString) {
  const dateObject = new Date(dateString);
  const updatedDate = dateObject.toString();

  return updatedDate.substring(0, 15);
}

Profile.propTypes = {
  auth: PropTypes.object,
  currentSession: PropTypes.object
};

export default Profile;

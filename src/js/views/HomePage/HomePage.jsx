import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../../components/SearchBar';
import NavigationBar from '../../components/NavigationBar';
import SignUp from '../../components/SignUp';
import LogIn from '../../components/LogIn';
import Footer from '../../components/Footer/Footer';

class HomePage extends React.Component {
  render() {
    const { homePage, toggleLogIn, auth } = this.props;
    return (
      <div>
        <NavigationBar isHomePage={true} toggleLogIn={ toggleLogIn } />
        <div className="main-section">
          <div className="columns">
            <div className="column search-bar">
              <p className="title home-page">Search for properties now!</p>
              <SearchBar isHomePage={true} />
            </div>
            {auth.status === 'AUTHENTICATED' &&
              <h1 className="is-size-4 has-text-dark">Welcome back {auth.firstName + ' ' + auth.lastName}</h1>}
            {auth.status === 'ANONYMOUS' &&
              <AnonymousSection
                showLogIn={homePage.toggleLogIn}
                handleClick={toggleLogIn}
              />
            }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
//  if no user is logged in, display this section
const AnonymousSection = ({ handleClick, showLogIn }) => {
  return (
    showLogIn ?
      <div className="column">
        <h3 className="title">Log In</h3>
        <a href="#" className="subtitle home-page" onClick={() => handleClick(false)}>
          or click here to sign up
        </a>
        <LogIn isHomePage={true} />
      </div> :
      <div className="column">
        <h3 className="title">Sign Up</h3>
        <a href="#" className="subtitle home-page" onClick={() => handleClick(true)}>
          or click here to log in
        </a>
        <SignUp isHomePage={true} />
      </div>
  );
};

HomePage.propTypes = {
  homePage: PropTypes.object,
  auth: PropTypes.object,
  toggleLogIn: PropTypes.func,
};

AnonymousSection.propTypes = {
  handleClick: PropTypes.func,
  showLogIn: PropTypes.bool,
};

export default HomePage;

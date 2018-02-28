import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../../components/SearchBar';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SignUp from '../../components/SignUp';
import LogIn from '../../components/LogIn/LogIn';
import Footer from '../../components/Footer/Footer';

class HomePage extends React.Component {
  render() {
    const { homePage, toggleLogIn } = this.props;

    return (
      <div>
        <NavigationBar />
        <SearchBar />
        
        { homePage.toggleLogIn
          ? <div>
              <h2>Log In</h2>
              <a href='#' onClick={ () => toggleLogIn(false) }>or click here to sign up</a>
              <LogIn />
            </div>
          : <div>
              <h2>Sign Up</h2>
              <a href='#' onClick={ () => toggleLogIn(true) }>or click here to log in</a>
              <SignUp />
            </div> }
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  homePage: PropTypes.object,
};

export default HomePage;
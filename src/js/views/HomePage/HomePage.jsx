import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../../components/SearchBar';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SignUp from '../../components/SignUp';
import LogIn from '../../components/LogIn';
import Footer from '../../components/Footer/Footer';

class HomePage extends React.Component {
  render() {
    const { homePage } = this.props;

    return (
      <div>
        <NavigationBar />
        <SearchBar />

        { homePage.toggleLogIn
          ? <LogIn />
          : <SignUp /> }
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  homePage: PropTypes.object,
};

export default HomePage;
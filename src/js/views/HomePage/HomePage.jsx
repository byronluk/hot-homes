import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../../components/SearchBar';
import NavigationBar from '../../components/NavigationBar';
import SignUp from '../../components/SignUp';
import LogIn from '../../components/LogIn';

class HomePage extends React.Component {
  render() {
    const { HomePage } = this.props;
    
    return (
      <div>
        <NavigationBar />
        <SearchBar />

        { HomePage.toggleLogIn
        ? <SignUp />
        : <LogIn /> }
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  HomePage: PropTypes.object,
};

export default HomePage;
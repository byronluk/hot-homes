import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import SignUp from '../../components/SignUp';
import LogIn from '../../components/LogIn';

class NavigationBar extends React.Component {
  render() {
    const { navBar, auth, toggleHidden, handleLogOut } = this.props;
    return (
      <nav className="Nav">
        <div className="Nav_container">
          <Link to="/" className="Nav_brand">
            Hot Homes
          </Link>
          <div className="Nav_right">
            <SearchBar />
            {auth.status === 'AUTHENTICATED' ?
              <div>
                <p>{ auth.firstName + ' ' + auth.lastName }</p>
                <button
                  name="toggleLogOut"
                  onClick={handleLogOut}
                >Log Out</button>
              </div> :
              <div>
                <button
                  name="toggleSignUp"
                  onClick={toggleHidden}
                >Sign Up</button>
                <button
                  name="toggleLogIn"
                  onClick={toggleHidden}
                >Log In</button>
              </div>}
            {navBar.toggleSignUp && <SignUp />}
            {navBar.toggleLogIn && <LogIn />}
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  navBar: PropTypes.object,
  auth: PropTypes.object,
  toggleHidden: PropTypes.func,
  handleLogOut: PropTypes.func,
};

export default NavigationBar;

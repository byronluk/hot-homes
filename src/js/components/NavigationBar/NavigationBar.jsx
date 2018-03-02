import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import SignUp from '../../components/SignUp';
import LogIn from '../../components/LogIn';

class NavigationBar extends React.Component {
  render() {
    const { navBar, auth, toggleHidden, handleLogOut, isHomePage, toggleLogIn } = this.props;
    return (
      <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item title">
            Hot Homes
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              {!isHomePage && <SearchBar />}
            </div>
          </div>
          <div className="navbar-end">
            {auth.status === 'AUTHENTICATED' ?
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control is-size-5 has-text-justified has-text-dark">
                    {auth.username}
                  </p>
                  <p className="control">
                    <button
                      className="button"
                      name="toggleLogOut"
                      onClick={handleLogOut}
                    >Log Out</button>

                  </p>
                </div>
              </div> :
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <button
                      className="button is-info"
                      name="toggleSignUp"
                      onClick={ isHomePage ? () => toggleLogIn(false) : toggleHidden}
                    >Sign Up</button>
                  </p>
                  <p className="control">
                    <button
                      className="button is-primary"
                      name="toggleLogIn"
                      onClick={ isHomePage ? () => toggleLogIn(true) : toggleHidden}
                    >Log In</button>
                  </p>
                </div>
              </div>}
          </div>
        </div>
        {navBar.toggleSignUp && <SignUp isHomePage={isHomePage} />}
        {navBar.toggleLogIn && <LogIn />}
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  isHomePage: PropTypes.bool,
  navBar: PropTypes.object,
  auth: PropTypes.object,
  toggleHidden: PropTypes.func,
  handleLogOut: PropTypes.func,
  toggleLogIn: PropTypes.func,
};

export default NavigationBar;

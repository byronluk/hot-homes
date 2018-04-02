import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../../SearchBar';
import SignUp from '../SignUp';
import LogIn from '../LogIn';

const NavigationBar = ({
  navBar,
  auth,
  toggleHidden,
  logOut,
  signUp,
  logIn
}) => {
  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item title">
          Hot Homes
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <SearchBar />
          </div>
        </div>
        <div className="navbar-end">
          {auth.status === 'AUTHENTICATED' ? (
            <div className="field is-grouped">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link control has-text-justified has-text-dark">
                  {auth.username}
                </a>

                <div className="navbar-dropdown">
                  <Link to="/profile" className="navbar-item">
                    Profile
                  </Link>
                  <Link to="#" className="navbar-item">
                    Rentals
                  </Link>
                  {auth.isLandlord && (
                    <Link to="/profile/properties" className="navbar-item">
                      Properties
                    </Link>
                  )}
                </div>
              </div>
              <div className="navbar-item">
                <p className="control">
                  <button
                    className="button is-link is-outlined"
                    onClick={logOut}
                  >
                    Log Out
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <button
                    className="button is-info"
                    name="toggleSignUp"
                    value="true"
                    onClick={toggleHidden}
                  >
                    Sign Up
                  </button>
                </p>
                <p className="control">
                  <button
                    className="button is-primary"
                    name="toggleLogIn"
                    value="true"
                    onClick={toggleHidden}
                  >
                    Log In
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {navBar.toggleSignUp && (
        <SignUp handleCancel={toggleHidden} onSubmit={signUp} />
      )}
      {navBar.toggleLogIn && (
        <LogIn handleCancel={toggleHidden} onSubmit={logIn} />
      )}
    </nav>
  );
};

NavigationBar.propTypes = {
  navBar: PropTypes.object,
  auth: PropTypes.object,
  toggleHidden: PropTypes.func,
  logOut: PropTypes.func,
  signUp: PropTypes.func,
  logIn: PropTypes.func
};

export default NavigationBar;

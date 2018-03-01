import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import SignUp from '../../components/SignUp';
import LogIn from '../../components/LogIn';

class NavigationBar extends React.Component {
  render() {
    const { navBar, toggleHidden } = this.props;
    return (
      <nav className="Nav">
        <div className="Nav_container">
          <Link to="/" className="Nav_brand">
            <p>Hot Homes</p>
          </Link>
          <Link to="/listings" className="Nav_brand">
            <p>Listings</p>
          </Link>
          <div className="Nav_right">
            <SearchBar />
            <div>
              <button name="toggleLogIn" value="true" onClick={ toggleHidden } >Log In </button>
              { navBar.toggleLogIn && <LogIn />}
            </div>
            <div>
              <button name="toggleSignUp" value="true" onClick={ toggleHidden } >Sign Up</button>
              { navBar.toggleSignUp && <SignUp />}
            </div>

          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;

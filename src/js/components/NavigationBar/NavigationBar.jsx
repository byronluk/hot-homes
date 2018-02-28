import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import SignUp from '../../components/SignUp';
import LogIn from '../../components/LogIn';

class NavigationBar extends React.Component {
  
  render() {
    const { navBar, toggleLogIn, toggleSignUp } = this.props;

    return (
      <nav className="Nav">
        <div className="Nav_container">
          <Link to="/" className="Nav_brand">
            <p>Hot Homes</p>
          </Link>
          <div className="Nav_right">
            <SearchBar />
            <div>
                <a href='#' onClick={() => toggleLogIn(false)}>Log In</a>
                <LogIn />
              </div>
             <div>
                <a href='#' onClick={() => toggleSignUp(false)}>Sign Up</a>
                <SignUp />
              </div>

          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
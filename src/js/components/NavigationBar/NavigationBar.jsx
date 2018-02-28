import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

export default class NavigationBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSignup = this.handleSignup.bind(this);
  //   this.handleLogin = this.handleLogin.bind(this);
  // }
  // handleClick(e) {
  //   const { dispatch } = this.props;
  //   dispatch(createUser(input));
  // }
  // handleClick(e) {
  //   const { dispatch } = this.props;
  //   dispatch(Login(input));
  // }
  render() {
    return (
      <nav className="Nav">
        <div className="Nav_container">
          <Link to="/" className="Nav_brand">
            <p>Hot Homes</p>
          </Link>
          <div className="Nav_right">
            <ul className="Nav_item-wrapper">
              <li className="Nav_item">
                <SearchBar />
              </li>
              <li className="Nav_item">
                {/* <button className="Nav_link" type='button' onClick={this.handleSignup}>Sign Up</button> */}
              </li>
              <li className="Nav_item">
                {/* <button className="Nav_link" type='button' onClick={this.handleLogin}>>Log In</button> */}
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
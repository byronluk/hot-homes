import React from 'react';
import { Link } from 'react-router';
import SearchBar from './SearchBar';

export default class Nav extends React.Component {
  render() {    
    return (
      <nav className="Nav">
        <div className="Nav_container">
            <Link to="/" className="Nav_brand">
              <img src="logo.svg" className="Nav_logo" />
            </Link>
          <div className="Nav_right">
            <ul className="Nav_item-wrapper">
            <li className="Nav_item">
               <SearchBar />
              </li>
              <li className="Nav_item">
                <button className="Nav_link" to="/path1">Sign Up</button>
              </li>
              <li className="Nav_item">
                <button className="Nav_link" to="/path2">Log In</button>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import SignUp from '../../components/SignUp';
import LogIn from '../../components/LogIn';

class NavigationBar extends React.Component {
  constructor(){
    super()
    this.state = {
      isHidden: true
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  
  render() {

    return (
      <nav className="Nav">
        <div className="Nav_container">
          <Link to="/" className="Nav_brand">
            <p>Hot Homes</p>
          </Link>
          <div className="Nav_right">
            <SearchBar />
            <div>
                <button onClick={this.toggleHidden.bind(this)} >Log In </button>
                {!this.state.isHidden && <LogIn />}              
              </div>
             <div>
             <button onClick={this.toggleHidden.bind(this)} >Sign Up</button>
                {!this.state.isHidden && <SignUp />}  
              </div>

          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
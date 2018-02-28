import React from 'react';
// import { Login } from '../actions/sigup';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.validateAndSubmit = this.validateAndSubmit.bind(this);
        this.updateForm = this.updateForm.bind(this);
      }
    
      validateAndSubmit(e) {
        e.preventDefault();
        let email, password;
    
        if (!firstName.match(/^[a-z]+$/i) || !lastName.match(/^[a-z]+$/i)) {
          console.log('name validation failed');
          return false;
        }
        //literally black magic
        if (!email.match(/^[^@]+@[^\.]+(\.[a-z0-9]+)*\.[a-z]+/i)) {
          console.log('email validation failed');
          return false;
        }
    
        if (password.length < 8) {
          console.log('password validation failed');
          return false;
        }
        
        //have to figure it out later....
        if (!email.match() || !password.match()) {
            console.log('username or password is not right');
            return false;
          }
        }
      updateForm(e) {
        const name = e.target.name;
        const value = e.target.value;
    
        // this.props.dispatch(Login({ name: name, value: value }));
      }

    render() {
        return (
            <div>
                <form className='Login-form'>
                    <input type='text' onChange={this.updateForm} name='email' placeholder='Email' />
                    <input type='password' onChange={this.updateForm} name='password' placeholder='Password' />
                    <input type='checkbox' onChange={this.updateForm} name='remember' />Remember me
                    <button type='submit' onClick={this.validateAndSubmit}>Log in</button>
                </form>
                <p>Forgot your password?</p>
            </div>
                )
            }
}

export default LogIn;
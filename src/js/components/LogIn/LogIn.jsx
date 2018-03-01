import React from 'react';
import { updateLogIn } from '../../actions/log-in';
import PropTypes from 'prop-types';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.validateAndSubmit = this.validateAndSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  validateAndSubmit(e) {
    const { email, password } = this.props.login;
    e.preventDefault();

    // literally black magic
    if (!email.match(/^[^@]+@[^\.]+(\.[a-z0-9]+)*\.[a-z]+/i)) {
      console.log('email validation failed');
      return false;
    }

    if (password.length < 8) {
      console.log('password validation failed');
      return false;
    }
     axios.get('./api/users').then( data => {
       if (this.isMatching (data.data, email, password)) {
         dispatch(logIn({ email: email, password: password }))
       } else {
         console.log('Invalid email or password')
       }
       
     })
  }
isMatching(data, name) {
  console.log(data);
  data.forEach( item => {});
    (entry => {
      if (entry.email == email && entery.password == password ) {
        return true;
      }
    });
    return false;
}
  updateForm(e) {
    const { dispatch } = this.props;
    const name = e.target.name;
    const value = e.target.value;

    dispatch(updateLogIn({ name: name, value: value }));
  }

  render() {
    const { logIn } = this.props;
    return (
      <div>
        <form className='Login-form'>
          <input
            type='text'
            onChange={this.updateForm}
            value={ logIn.email }
            name='email'
            placeholder='Email' />

          <input
            type='password'
            onChange={this.updateForm}
            value={ logIn.password }
            name='password'
            placeholder='Password' />

          <input
            type='checkbox'
            onChange={this.updateForm}
            name='remember' />Remember me
          <button
            type='submit'
            onClick={this.validateAndSubmit}>Log In</button>
        </form>
        <p>Forgot your password?</p>
      </div>
    );
  }
}

LogIn.propTypes = {
  logIn: PropTypes.object,
  dispatch: PropTypes.func,
};

export default LogIn;

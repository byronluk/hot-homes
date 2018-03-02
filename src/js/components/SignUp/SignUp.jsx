import React from 'react';
import { createUser, updateSignUp } from '../../actions/sign-up';
import axios from 'axios';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.validateAndSubmit = this.validateAndSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  validateAndSubmit(e) {
    //don't do any silly redirects
    const { firstName, lastName, username, email, password, isLandlord } = this.props.signUp;
    e.preventDefault();


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


    axios.get('./api/users').then(data => {

      console.log(data.data);
      if (!this.isAvailable(data.data, username, email)) {
        console.log('username/email is already taken');
        return false;
      }

      //if all of those pass, go ahead and create a new user
      this.props.dispatch(createUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
        isLandlord: isLandlord,
      }))
    })
      .catch(err => {
        console.log('Server error: ' + err);
        return false;
      });
  }

  isAvailable(data, name, email) {
        
    for (let i = 0; i < data.length; i++) {

      let entry = data[i];
      if (entry.username == name || entry.email == email) {
        return false;
      }
    }
    return true;

  }

  updateForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.props.dispatch(updateSignUp({ name: name, value: value }));
  }

  render() {
    const { signUp } = this.props;
    return (
      <div>
        <form>

          <input
            value={signUp.firstName}
            type='text'
            onChange={this.updateForm}
            name='firstName'
            placeholder='First Name'
          />
          <input
            value={signUp.lastName}
            type='text'
            onChange={this.updateForm}
            name='lastName'
            placeholder='Last Name'
          />
          <input
            value={signUp.username}
            type='text'
            onChange={this.updateForm}
            name='username'
            placeholder='Username'
          />
          <input
            value={signUp.email}
            type='text'
            onChange={this.updateForm}
            name='email'
            placeholder='Email'
          />
          <input
            value={signUp.password}
            type='password'
            onChange={this.updateForm}
            name='password'
            placeholder='Password'
          />

          <p>Are you planning on listing your own properties?</p>
          <input type='checkbox' onChange={this.updateForm} name='isLandlord' />

          <button type='submit' onClick={this.validateAndSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUp;
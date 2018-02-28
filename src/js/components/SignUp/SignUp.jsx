import React from 'react';
import { createUser, updateSignUp } from '../../actions/sign-up';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.validateAndSubmit = this.validateAndSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  validateAndSubmit(e) {
    //don't do any silly redirects
    const { firstName, lastName, username, email, password, isLandlord } = this.props;
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


    this.isAvailable(username).then(available => {

      if (!available) {
        console.log('username is already taken');
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
    });





  }

  isAvailable(name) {

    return axios.get('/api/users/')
      .then((data) => {
        data.forEach(entry => {
          if (entry.username == name) {
            return false;
          }
        });
        return true;
      })
      .catch(err => {
        console.log('Server error');
        return false;
      });
  }

  updateForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.props.dispatch(updateSignUp({ name: name, value: value }));
  }

  render() {
    const { firstName, lastName, username, email, password } = this.props;
    console.log(firstName);
    return (
      <div>
        <form>

          <input
            value={ firstName }
            type='text'
            onChange={this.updateForm}
            name='firstName'
            placeholder='First Name'
          />
          <input
            value={ lastName }          
            type='text'
            onChange={this.updateForm}
            name='lastName'
            placeholder='Last Name'
          />
          <input
            value={ username }          
            type='text'
            onChange={this.updateForm}
            name='username'
            placeholder='Username'
          />
          <input
            value={ email }            
            type='text'
            onChange={this.updateForm}
            name='email'
            placeholder='Email'
          />
          <input
            value={ password }                      
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
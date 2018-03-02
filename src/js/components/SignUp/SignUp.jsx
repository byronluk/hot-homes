import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { createUser, updateSignUp, closeHiddenFields } from '../../actions/sign-up';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.validateAndSubmit = this.validateAndSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  validateAndSubmit(e) {
    //  don't do any silly redirects
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      isLandlord } = this.props.signUp;
    e.preventDefault();

    if (!firstName.match(/^[a-z]+$/i) || !lastName.match(/^[a-z]+$/i)) {
      console.log('name validation failed');
      return false;
    }
    //  literally black magic
    if (!email.match(/^[^@]+@[^\.]+(\.[a-z0-9]+)*\.[a-z]+/i)) {
      console.log('email validation failed');
      return false;
    }

    if (password.length < 8) {
      console.log('password validation failed');
      return false;
    }

    axios.get('./api/users').then(data => {

      if (!this.isAvailable(data.data, username)) {
        console.log('username is already taken');
        return false;
      }

      //  if all of those pass, go ahead and create a new user
      this.props.dispatch(createUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
        isLandlord: isLandlord,
      }));
    })
      .catch(err => {
        console.log('Server error: ' + err);
        return false;
      });
  }

  isAvailable(data, name) {
    console.log(data);
    data.forEach(element => {

    }); (entry => {
      if (entry.username == name) {
        return false;
      }
    });
    return true;
  }

  updateForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.props.dispatch(updateSignUp({ name: name, value: value }));
  }

  handleCancel(event) {
    const { dispatch } = this.props;
    event.stopPropagation();
    if (event.target !== event.currentTarget) return;
    dispatch(closeHiddenFields());
  }

  render() {
    const { signUp, isHomePage } = this.props;
    return (
      <div className={isHomePage ? 'column' : 'modal is-active'}>
        <div
          className={isHomePage ? '' : 'modal-background'}
          onClick={isHomePage ? () => { return; } : this.handleCancel}
        >
          <form className={isHomePage ? '' : 'modal-content has-text-grey-lighter modal-format'}>

            <div className="field">
              <label className={isHomePage ? 'label' : 'label has-text-grey-lighter'}>First Name</label>
              <input
                className="input"
                value={signUp.firstName}
                type='text'
                onChange={this.updateForm}
                name='firstName'
                placeholder='First Name'
              />
            </div>
            <div className="field">
              <label className={isHomePage ? 'label' : 'label has-text-grey-lighter'}>Last Name</label>
              <input
                className="input"
                value={signUp.lastName}
                type='text'
                onChange={this.updateForm}
                name='lastName'
                placeholder='Last Name'
              />
            </div>
            <div className="field">
              <label className={isHomePage ? 'label' : 'label has-text-grey-lighter'}>Username</label>
              <div className="control has-icons-left">
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  className="input"
                  value={signUp.username}
                  type='text'
                  onChange={this.updateForm}
                  name='username'
                  placeholder='Username'
                />
              </div>
            </div>
            <div className="field">
              <label className={isHomePage ? 'label' : 'label has-text-grey-lighter'}>Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  value={signUp.email}
                  type='text'
                  onChange={this.updateForm}
                  name='email'
                  placeholder='Email'
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className={isHomePage ? 'label' : 'label has-text-grey-lighter'}>Password</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signUp.password}
                  onChange={this.updateForm}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    onChange={this.updateForm}
                    name="isLandlord"
                  />
                  Are you planning on listing your own properties?
              </label>
              </div>
            </div>
            <button
              className="button"
              type="submit"
              onClick={this.validateAndSubmit}>Submit</button>
            <a
              onClick={this.handleCancel}
              className={isHomePage ? 'display-none' : 'modal-close is-large delete'}
              aria-label="close">
            </a>
          </form>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.object,
  isHomePage: PropTypes.bool,
  dispatch: PropTypes.func,
  handleCancel: PropTypes.func,
};

export default SignUp;

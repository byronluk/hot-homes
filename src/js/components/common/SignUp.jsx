import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

let SignUp = ({ handleSubmit, handleCancel }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background">
        <form className="modal-content has-text-grey-lighter modal-format">
          <div className="field">
            <label className="label has-text-grey-lighter">First Name</label>
            <Field
              component="input"
              className="input"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="field">
            <label className="label has-text-grey-lighter">Last Name</label>
            <Field
              component="input"
              className="input"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="field">
            <label className="label has-text-grey-lighter">Username</label>
            <div className="control has-icons-left">
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
              <Field
                component="input"
                className="input"
                type="text"
                name="username"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-grey-lighter">Email</label>
            <div className="control has-icons-left">
              <Field
                component="input"
                className="input"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label has-text-grey-lighter">Password</label>
            <div className="control has-icons-left">
              <Field
                component="input"
                className="input"
                type="password"
                name="password"
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <Field component="input" type="checkbox" name="isLandlord" />
                Are you planning on listing your own properties?
              </label>
            </div>
          </div>
          <div className="field is-grouped">
            <button
              className="button is-primary control"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="button control"
              type="button"
              onClick={handleCancel}
              name="toggleSignUp"
            >
              Cancel
            </button>
          </div>
          <a
            name="toggleSignUp"
            onClick={handleCancel}
            className="modal-close is-large delete"
            aria-label="close"
          />
        </form>
      </div>
    </div>
  );
};

SignUp = reduxForm({
  form: 'signUp'
})(SignUp);

SignUp.propTypes = {
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default SignUp;

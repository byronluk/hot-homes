import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

let LogIn = ({ handleSubmit, handleCancel }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background">
        <form
          className="modal-content has-text-grey-lighter modal-format"
          onSubmit={handleSubmit}
        >
          <div className="field">
            <label className="label has-text-grey-lighter">Email</label>
            <div className="control has-icons-left">
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
              <Field
                component="input"
                className="input"
                type="text"
                name="email"
                placeholder="Email"
              />
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
                <input type="checkbox" disabled name="remember" />
                Remember me
              </label>
            </div>
          </div>
          <div>
            <a href="#">Forgot your password?</a>
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
              name="toggleLogIn"
            >
              Cancel
            </button>
          </div>
          <a
            onClick={handleCancel}
            name="toggleLogIn"
            className="modal-close is-large delete"
            aria-label="close"
          />
        </form>
      </div>
    </div>
  );
};

LogIn = reduxForm({
  form: 'logIn'
})(LogIn);

LogIn.propTypes = {
  logIn: PropTypes.object,
  updateForm: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func
};

export default LogIn;

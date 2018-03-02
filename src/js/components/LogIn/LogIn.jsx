import React from 'react';
import PropTypes from 'prop-types';

class LogIn extends React.Component {
  render() {
    const { logIn, updateForm, handleSubmit, isHomePage, handleCancel } = this.props;
    const { emailOrUsername, password } = logIn;
    return (
      <div className={isHomePage ? 'column' : 'modal is-active'}>
        <div
          className={isHomePage ? '' : 'modal-background'}
          onClick={isHomePage ? () => { return; } : handleCancel}
        >
          <form className={isHomePage ? '' : 'modal-content has-text-grey-lighter modal-format'} onSubmit={e => e.preventDefault()}>

            <div className="field">
              <label className={isHomePage ? 'label' : 'label has-text-grey-lighter'}>Email or Username</label>
              <div className="control has-icons-left">
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  className="input"
                  type="text"
                  value={emailOrUsername}
                  onChange={updateForm}
                  name="emailOrUsername"
                  placeholder="Email or username"
                />
              </div>
            </div>

            <div className="field">
              <label className={isHomePage ? 'label' : 'label has-text-grey-lighter'}>Password</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={updateForm}
                  name="password"
                  placeholder="Password"
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
                    onChange={updateForm}
                    name="remember"
                  />
                  Remember me
            </label>
              </div>
            </div>
            <div>
              <a href="#">Forgot your password?</a>
            </div>
            <button
              className="button"
              type="submit"
              onClick={handleSubmit}
            >Log In</button>
            <a
              onClick={handleCancel}
              className={isHomePage ? 'display-none' : 'modal-close is-large delete'}
              aria-label="close"></a>
          </form>
        </div>
      </div>
    );
  }
}

LogIn.propTypes = {
  isHomePage: PropTypes.bool,
  logIn: PropTypes.object,
  updateForm: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
};

export default LogIn;

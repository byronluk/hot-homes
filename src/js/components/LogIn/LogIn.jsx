import React from 'react';
import PropTypes from 'prop-types';

class LogIn extends React.Component {
  render() {
    const { logIn, updateForm, handleSubmit } = this.props;
    const { emailOrUsername, password } = logIn;
    return (
      <form onSubmit={ e => e.preventDefault() }>
        <input
          type="text"
          value={ emailOrUsername }
          onChange={ updateForm }
          name="emailOrUsername"
          placeholder="Email or username" />

        <input
          type="password"
          value={ password }
          onChange={ updateForm }
          name="password"
          placeholder="Password" />

        <input
          type="checkbox"
          onChange={ updateForm }
          name="remember" />Remember me

        <button
          type="submit"
          onClick={ handleSubmit }
        >Log In</button>

      <p>Forgot your password?</p>
    </form>
    );
  }
}

LogIn.propTypes = {
  logIn: PropTypes.object,
  updateForm: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default LogIn;

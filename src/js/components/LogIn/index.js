import { connect } from 'react-redux';
import { updateLogIn, validateAndSubmit } from '../../actions/log-in';
import LogIn from './LogIn';

function mapStatetoProps({ logIn }) {
  return { logIn };
}

function mapDispatchToProps(dispatch) {
  return {
    updateForm(event) {
      dispatch(updateLogIn(event.target.name, event.target.value));
    },
    handleSubmit() {
      dispatch(validateAndSubmit());
    },
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(LogIn);

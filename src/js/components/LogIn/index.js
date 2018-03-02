import { connect } from 'react-redux';
import { updateLogIn, validateAndSubmit, closeHiddenFields } from '../../actions/log-in';
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
    handleCancel(event) {
      event.stopPropagation();
      if (event.target !== event.currentTarget) return;
      dispatch(closeHiddenFields());
    },
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(LogIn);

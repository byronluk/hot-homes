import LogIn from './LogIn';
import { connect } from 'react-redux';

function mapStatetoProps({ logIn }) {
  return { logIn };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(LogIn);

import SignUp from './SignUp';
import { connect } from 'react-redux';

function mapStateToProps({ signUp }) {
  return { signUp };
}

export default connect(mapStateToProps)(SignUp);

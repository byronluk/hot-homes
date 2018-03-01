import SignUp from './SignUp';
import { connect } from 'react-redux';

function mapStatetoProps({ signUp }) {
    return { signUp };
}

export default connect(mapStatetoProps)(SignUp);
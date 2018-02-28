import SignUp from './SignUp';
import { connect } from 'react-redux';


function mapStatetoProps(state) {
    return state.signup;
}


export default connect(mapStatetoProps)(SignUp);

import LogIn from './LogIn';
import { connect } from 'react-redux';


function mapStatetoProps(state) {
    return state.login;
}


export default connect(mapStatetoProps)(Login);
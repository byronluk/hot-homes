import LogIn from './LogIn';
import { connect } from 'react-redux';


function mapStatetoProps(state) {
    return state.logIn;
}


export default connect(mapStatetoProps)(LogIn);
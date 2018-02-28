import LogIn from './LogIn';
import { connect } from 'react-redux';


function mapStatetoProps({ logIn }) {
    return { logIn };
}


export default connect(mapStatetoProps)(LogIn);
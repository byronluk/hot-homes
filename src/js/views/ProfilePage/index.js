import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Profile);

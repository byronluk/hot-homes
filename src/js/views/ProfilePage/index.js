import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = ({ auth, currentSession }) => {
  return { auth, currentSession };
};

export default connect(mapStateToProps)(Profile);

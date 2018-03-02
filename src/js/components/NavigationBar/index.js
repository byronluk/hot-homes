import { connect } from 'react-redux';
import { toggleHidden, logOut } from '../../actions/navigation-bar';
import NavigationBar from './NavigationBar';

const mapStateToProps = ({ navBar, auth }) => {
  return { navBar, auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHidden(event) {
      dispatch(toggleHidden(event.target.name));
    },
    handleLogOut() {
      dispatch(logOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

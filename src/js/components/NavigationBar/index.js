import { connect } from 'react-redux';
import { toggleHidden, logOut, closeHiddenFields } from '../../actions/navigation-bar';
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

    handleCancel() {
      dispatch(closeHiddenFields());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

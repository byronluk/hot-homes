import { connect } from 'react-redux';
import {
  toggleHidden,
  createUser,
  logIn,
  logOut
} from './navigationBarActions';
import NavigationBar from './NavigationBar';

const mapStateToProps = ({ navBar, auth }) => {
  return { navBar, auth };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleHidden(event) {
      const { name, value } = event.target;
      dispatch(toggleHidden(name, value));
    },
    signUp(values) {
      dispatch(createUser(values));
    },
    logIn(values) {
      const { email, password } = values;
      dispatch(logIn(email, password));
    },
    logOut() {
      dispatch(logOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

import { connect } from 'react-redux';
import { toggleLogIn } from '../../actions/navigation-bar';
import NavigationBar from './NavigationBar';

const mapStateToProps = ({ navBar }) => {
  return { navBar };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLogIn(value) {
      dispatch(toggleLogIn(value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
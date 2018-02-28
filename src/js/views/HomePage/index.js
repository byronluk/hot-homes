import { connect } from 'react-redux';
import { toggleLogIn } from '../../actions/home-page';
import HomePage from './HomePage';

mapStateToProps = ({ homePage }) => {
  return { homePage };
};

mapDispatchToProps = (dispatch) => {
  return {
    toggleLogIn(value) {
      dispatch(toggleLogIn(value));
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(HomePage);
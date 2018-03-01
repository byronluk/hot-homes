import { connect } from 'react-redux';
import { toggleLogIn } from '../../actions/home-page';
import HomePage from './HomePage';

const mapStateToProps = ({ homePage }) => {
  return { homePage };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLogIn(value) {
      dispatch(toggleLogIn(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

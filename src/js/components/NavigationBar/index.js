import { connect } from 'react-redux';
import { toggleHidden } from '../../actions/navigation-bar';
import NavigationBar from './NavigationBar';

const mapStateToProps = ({ navBar }) => {
  return { navBar };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHidden(value) {
      dispatch(toggleHidden(value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
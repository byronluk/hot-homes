import { connect } from 'react-redux';
import { toggleHidden } from '../../actions/navigation-bar';
import NavigationBar from './NavigationBar';

const mapStateToProps = ({ navBar }) => {
  return { navBar };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHidden(event) {
      dispatch(toggleHidden(event.target.name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

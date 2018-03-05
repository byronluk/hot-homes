import { connect } from 'react-redux';
import Listings from './Listings';
import { updateCurrentProperty } from '../../actions/current-session';

const mapStateToProps = ({ searchBar }) => {
  return { searchBar };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentProperty(id) {
      dispatch(updateCurrentProperty(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);

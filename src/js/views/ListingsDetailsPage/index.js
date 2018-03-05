import ListingDetails from './ListingDetails';
import { connect } from 'react-redux';
import { updateCurrentProperty } from '../../actions/current-session';

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentProperty(id) {
      dispatch(updateCurrentProperty(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ListingDetails);

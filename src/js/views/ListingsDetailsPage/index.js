import ListingDetails from './ListingDetails';
import { connect } from 'react-redux';

const mapStateToProps = ({ auth }) => {
  return {
    userId: auth.id
  };
};

export default connect(mapStateToProps)(ListingDetails);

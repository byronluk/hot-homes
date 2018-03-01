import { connect } from 'react-redux';
import Listings from './Listings';

const mapStateToProps = ({ searchBar }) => {
  return { searchBar };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);

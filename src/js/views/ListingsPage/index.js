import { connect } from 'react-redux';
import Listings from './Listings';

const mapStateToProps = ({ searchBar }) => {
  return { searchBar };
};

export default connect(mapStateToProps)(Listings);

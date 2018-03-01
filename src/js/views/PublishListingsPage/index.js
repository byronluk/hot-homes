import PublishListings from './PublishListings';
import { connect } from 'react-redux';

function mapStateToProps({ publishListings }) {
  return {
    publishListings,
  };
}
export default connect(mapStateToProps)(PublishListings);

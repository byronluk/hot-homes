import PublishListings from './PublishListings';
import { connect } from 'react-redux';

function mapStatetoProps( {publishListings}) {
    return {
        publishListings
    }
}
export default connect(mapStoreToProps)(PublishListings);
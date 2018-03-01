import ListingDetails from './ListingDetails';
import { connect } from 'react-redux';



function mapStateToProps(store) {
    return {
        ...store.currentSession,
    }
}

export default connect(mapStateToProps)(ListingDetails);

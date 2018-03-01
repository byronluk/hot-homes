import RentListings from './RentListings';
import { connect } from 'react-redux';

function mapStoreToProps(store) {

    return {
        ...store.rentListings,
        user: store.currentSession.currentUser,
        property: store.currentSession.currentProperty,
    }
}

export default connect(mapStoreToProps)(RentListings);
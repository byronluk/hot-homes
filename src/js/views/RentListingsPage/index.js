import RentListings from './RentListings';
import { connect } from 'react-redux';
        




function mapStoreToProps(store) {

    return store.rentListings;
}

export default connect(mapStoreToProps)(RentListings);
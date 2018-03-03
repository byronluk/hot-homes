import PublishListings from './PublishListings';
import { connect } from 'react-redux';
import { updatePublishListings, updateDatabaseProperty } from '../../actions/publish-listings';

function mapStateToProps({ publishListings }) {
  return {
    publishListings,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateForm(event) {
      dispatch(updatePublishListings(event.target.name, event.target.value));
    },
    handleSubmit(event) {
      event.preventDefault();
      dispatch(updateDatabaseProperty())
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PublishListings);

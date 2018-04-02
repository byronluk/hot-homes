import PublishListings from './PublishListings';
import { connect } from 'react-redux';
import {
  updatePublishListings,
  updateDatabaseProperty,
  cancelForm
} from '../../actions/publish-listings';

function mapStateToProps({ publishListings }) {
  return {
    publishListings
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateForm(event) {
      dispatch(updatePublishListings(event.target.name, event.target.value));
    },
    handleSubmit(event) {
      // event.preventDefault();
      dispatch(updateDatabaseProperty());
    },
    handleCancel(event) {
      event.stopPropagation();
      if (event.target !== event.currentTarget) return;
      dispatch(cancelForm());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublishListings);

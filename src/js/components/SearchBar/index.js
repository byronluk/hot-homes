import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { onSearchBarChange, searchProperties } from '../../actions/search-bar';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const mapStateToProps = ({ searchBar }) => {
  return { searchBar };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(event) {
      dispatch(onSearchBarChange(event));
    },
    /*
      convert selected location to latlng
      update input fields with location name
      send latlng to searchproperties actions
    */
    handleLocationSelect(event) {
      dispatch(onSearchBarChange(event));
      geocodeByAddress(event)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        dispatch(searchProperties(latLng, event));
      })
    .catch(error => console.log('Error', error));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

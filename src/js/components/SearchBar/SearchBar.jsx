import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';

class SearchBar extends React.Component {
  render() {
    const { searchBar, handleInputChange, handleLocationSelect } = this.props;
    { /*
      props to be passed down to input element in PlacesAutocomplete component
    */ }
    const inputProps = {
      value: searchBar.input,
      onChange: handleInputChange,
      placeholder: 'search here',
    };
    return (
      <form>
        <PlacesAutocomplete
          id="search-bar"
          type="text"
          inputProps={ inputProps }
          onSelect={ handleLocationSelect }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchBar: PropTypes.object,
  handleInputChange: PropTypes.func,
  handleLocationSelect: PropTypes.func,
};

export default SearchBar;

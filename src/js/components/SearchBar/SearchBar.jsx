import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchBar, handleInputChange } = this.props;

    return (
      <form>
        <input type="text" value={ searchBar.input } onChange={ handleInputChange } placeholder="search bar" />
        <button>Search</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchBar: PropTypes.object,
  handleInputChange: PropTypes.func,
}

export default SearchBar;

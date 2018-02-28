import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { onSearchBarChange } from '../../actions/search-bar';

const mapStateToProps = ({ searchBar }) => {
  return { searchBar };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(event) {
      dispatch(onSearchBarChange(event.target.value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
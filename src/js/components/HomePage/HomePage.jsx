import React from 'react';

import SearchBar from '../../components/SearchBar';

const HomePage = () => {
  return (
    <div className="main-section">
      <div className="columns">
        <div className="column search-bar">
          <p className="title home-page">Search for properties now!</p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

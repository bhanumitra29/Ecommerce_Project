import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    console.log('Searching for:', searchText);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <button type="submit">
      <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;

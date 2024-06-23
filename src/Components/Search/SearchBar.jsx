
import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";


function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery.trim()); // Trim whitespace from search query and pass to parent component
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Anywhere"
          className="search-bar-input"
          value={searchQuery}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <div className="search-bar-text">Any Week</div>
        <div className="search-bar-text">Add guests</div>
        <div className="search-icon-div" onClick={handleSearch}>
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

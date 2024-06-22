import React from "react";
import "./styles.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function SearchBox() {
  return (
    <div className="mobile-search-bar">
      <div className='mobile-search-icon-div'>
        <SearchRoundedIcon className='search-icon' />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="mobile-search-input"
      />
    </div>
  );
}

export default SearchBox;

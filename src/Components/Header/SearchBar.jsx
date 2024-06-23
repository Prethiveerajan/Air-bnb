import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "../Header/style.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-bar-text">Anywhere</div>
      <div className="search-bar-text">Any Week</div>
      <div className="search-bar-text2">Add guests</div>
      <div className="search-icon-div">
        <SearchRoundedIcon className="search-icon" />
      </div>
    </div>
  );
}

export default SearchBar;

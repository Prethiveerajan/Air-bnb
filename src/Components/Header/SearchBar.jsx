import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function SearchBar() {
  return (
    <div className='search-bar'>
      <div className='search-bar-text'>Any Where</div>
      <div className='search-bar-text'>Any Week</div>
      <div className='search-bar-text2'>Add Guest</div>
      <div className='search-icon-div'><SearchRoundedIcon className='search-icon' /></div>
    </div>
  );
}

export default SearchBar;

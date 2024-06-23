// import React, { useState } from "react";
// import "./styles.css";
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

// const MobileSearchBox = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onSearch(searchQuery.trim());
//     }
//   };

//   return (
//     <div className="mobile-search-bar">
//       <div className='mobile-search-icon-div' onClick={() => onSearch(searchQuery.trim())}>
//         <SearchRoundedIcon className='search-icon' />
//       </div>
//       <input
//         type="text"
//         placeholder="Search..."
//         className="mobile-search-input"
//         value={searchQuery}
//         onChange={handleChange}
//         onKeyPress={handleKeyPress}
//       />
//     </div>
//   );
// };

// export default MobileSearchBox;


import React, { useState } from "react";
import "./styles.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const MobileSearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <div className="mobile-search-bar">
      <div className='mobile-search-icon-div' onClick={() => onSearch(searchQuery.trim())}>
        <SearchRoundedIcon className='search-icon' />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="mobile-search-input"
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default MobileSearchBox;


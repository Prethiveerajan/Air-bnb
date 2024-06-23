
// import React, { useState } from "react";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";


// function SearchBar({ onSearch }) {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     onSearch(searchQuery.trim()); 
//   };

//   const handleChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div className="search-bar-container">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Anywhere"
//           className="search-bar-input"
//           value={searchQuery}
//           onChange={handleChange}
//           onKeyPress={handleKeyPress}
//         />
//         <div className="search-bar-text">Any Week</div>
//         <div className="search-bar-text">Add guests</div>
//         <div className="search-icon-div" onClick={handleSearch}>
//           <SearchRoundedIcon className="search-icon" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchBar;

// import React, { useState } from "react";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


// function SearchBar({ onSearch }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [startDate, setStartDate] = useState(null);
//   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

//   const handleSearch = () => {
//     onSearch(searchQuery.trim());
//   };

//   const handleChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleDateClick = () => {
//     setIsDatePickerOpen(!isDatePickerOpen);
//   };

//   const handleDateChange = (date) => {
//     setStartDate(date);
//     setIsDatePickerOpen(false); 
//   };

//   return (
//     <div className="search-bar-container">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Anywhere"
//           className="search-bar-input"
//           value={searchQuery}
//           onChange={handleChange}
//           onKeyPress={handleKeyPress}
//         />
//         <div className="search-bar-text" onClick={handleDateClick}>
//           {startDate ? startDate.toDateString() : "Any Week"}
//         </div>
//         <div className="search-bar-text">Add guests</div>
//         <div className="search-icon-div" onClick={handleSearch}>
//           <SearchRoundedIcon className="search-icon" />
//         </div>
//       </div>
//       {isDatePickerOpen && (
//         <DatePicker
//           selected={startDate}
//           onChange={handleDateChange}
//           inline
//         />
//       )}
//     </div>
//   );
// }

// export default SearchBar;
import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CalendarModal from "./CalendarModal";
import "./Search.css";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery.trim());
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleDateClick = () => {
    setIsDatePickerOpen(true);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setIsDatePickerOpen(false); // Close the modal after selecting a date
  };

  const closeModal = () => {
    setIsDatePickerOpen(false);
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
        <div className="search-bar-text" onClick={handleDateClick}>
          {startDate ? startDate.toDateString() : "Any Week"}
        </div>
        <div className="search-bar-text">Add guests</div>
        <div className="search-icon-div" onClick={handleSearch}>
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <CalendarModal
        isOpen={isDatePickerOpen}
        onClose={closeModal}
        onDateChange={handleDateChange}
        startDate={startDate}
      />
    </div>
  );
}

export default SearchBar;

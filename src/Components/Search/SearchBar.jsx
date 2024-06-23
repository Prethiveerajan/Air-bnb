
import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CalendarModal from "./CalendarModal";
import GuestModal from "./GuestModal";
import "./Search.css";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

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
    setIsDatePickerOpen(false); // Close the calendar modal after selecting a date
  };

  const handleGuestModalOpen = () => {
    setIsGuestModalOpen(true);
  };

  const handleGuestModalClose = () => {
    setIsGuestModalOpen(false);
  };

  const handleSelectGuest = (guestType, change) => {
    setGuests({
      ...guests,
      [guestType]: guests[guestType] + change,
    });
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
        <div className="search-bar-text" onClick={handleGuestModalOpen}>
          {guests.adults + guests.children + guests.infants + guests.pets > 0
            ? `${guests.adults + guests.children + guests.infants + guests.pets} guests`
            : "Add guests"}
        </div>
        <div className="search-icon-div" onClick={handleSearch}>
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <CalendarModal
        isOpen={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        onDateChange={handleDateChange}
        startDate={startDate}
      />
      <GuestModal
        isOpen={isGuestModalOpen}
        onClose={handleGuestModalClose}
        onSelectGuest={handleSelectGuest}
        guests={guests} 
      />
    </div>
  );
};

export default SearchBar;

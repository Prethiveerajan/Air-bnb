import React, { useState } from "react";
import "./style.css";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "../ProfileMenu/BasicMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBox from "../MobileSearchBar/Search";
import Logo from "./Logo"; 
import SearchBar from "../Search/SearchBar"; // Ensure SearchBar is imported

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query); // Pass the search query up to the Home component
  };

  return (
    <div className="navbar">
      <Logo /> 
      <div className="navbar-items">
        <div className="nav-item active">Stays</div>
        <div className="nav-item">Experiences</div>
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">Airbnb your home</div>
        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
      <SearchBar onSearch={handleSearch} />
      <MobileSearchBox onSearch={handleSearch} />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;

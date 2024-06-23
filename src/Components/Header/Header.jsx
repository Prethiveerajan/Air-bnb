import React from "react";
import "./style.css";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "../ProfileMenu/BasicMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar/Search";
import SearchBar from "./SearchBar";  
import Logo from "./Logo"; 

function Header() {
  return (
    <div className="navbar">
      <Logo /> 
      <SearchBar /> 
      <div className="profile-container">
        <div className="airbnb-your-home">Airbnb your home</div>
        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
      <MobileSearchBar />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;

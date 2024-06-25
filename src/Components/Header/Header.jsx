// import React, { useState, useEffect } from "react";
// import "./style.css";
// import LanguageIcon from "@mui/icons-material/Language";
// import BasicMenu from "../ProfileMenu/BasicMenu";
// import SimpleBottomNavigation from "./BottomNav";
// import MobileSearchBox from "../MobileSearchBar/Search";
// import Logo from "./Logo";
// import SearchBar from "../Search/SearchBar";

// function Header({ onSearch }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showMenu, setShowMenu] = useState(true);
//   const [headerUp, setHeaderUp] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY === 0) {
//         setShowMenu(true);
//         setHeaderUp(false); 
//       } else {
//         setShowMenu(false);
//         setHeaderUp(true);  
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     onSearch(query);
//   };

//   const handleRefresh = () => {
//     window.location.reload();
//   };

//   return (
//     <div className={`navbar ${headerUp ? "header-up" : ""}`}>
//       <Logo />
//       <div className={`navbar-items ${showMenu ? "show" : "hide"}`}>
//         <div className="nav-item active" onClick={handleRefresh}>Stays</div>
//         <div className="nav-item" onClick={handleRefresh}>Experiences</div>
//       </div>
//       <div className="profile-container">
//         <div className="airbnb-your-home">Airbnb your home</div>
//         <div className="airbnb-your-home">
//           <LanguageIcon sx={{ fontSize: "1.3rem" }} />
//         </div>
//         <div className="profile-div">
//           <BasicMenu />
//         </div>
//       </div>
//       <div className="search-bar-container">
//         <SearchBar onSearch={handleSearch} />
//         <MobileSearchBox onSearch={handleSearch} />
//       </div>
//       <SimpleBottomNavigation />
//     </div>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import "./style.css";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "../ProfileMenu/BasicMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBox from "../MobileSearchBar/Search";
import Logo from "./Logo";
import SearchBar from "../Search/SearchBar";

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const [headerUp, setHeaderUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowMenu(true);
        setHeaderUp(false); 
      } else {
        setShowMenu(false);
        setHeaderUp(true);  
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={`navbar ${headerUp ? "header-up" : ""}`}>
      <Logo />
      <div className={`navbar-items ${showMenu ? "show" : "hide"}`}>
        <div className="nav-item active" onClick={handleRefresh}>Stays</div>
        <div className="nav-item" onClick={handleRefresh}>Experiences</div>
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
      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch} />
        <MobileSearchBox onSearch={handleSearch} />
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;


// import React from "react";
// import { links } from "../../assets/images-links"; 
// import "./Style.css";

// function FilterEx({ selectedFilter, setSelectedFilter, setImageSrc }) {
//   const handleClick = (i) => {
//     setSelectedFilter(i);
//     setImageSrc(links[i].imgSrc); // Set image source based on selected filter
//   };

//   return (
//     <div className="filter-div">
//       {links.map((item, i) => (
//         <div
//           key={i}
//           className={`links-box ${i === selectedFilter ? "selected-box" : ""}`}
//           onClick={() => handleClick(i)}
//         >
//           <img src={item.imgSrc} className="links-img" alt={`Image ${i}`} /> {/* Ensure alt text */}
//           <p className={`links-label ${i === selectedFilter ? "selected-label" : ""}`}>
//             {item.label}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FilterEx;




import React, { useState } from "react";
import { links } from "../../assets/images-links"; 
import "./Style.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function FilterEx({ selectedFilter, setSelectedFilter, setImageSrc }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Number of items to show per page

  const handleClick = (i) => {
    setSelectedFilter(i);
    setImageSrc(links[i].imgSrc); // Set image source based on selected filter
  };

  const totalPages = Math.ceil(links.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleLinks = links.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="filter-div">
      <button className="arrow-button left" onClick={handlePrev} disabled={currentPage === 0}>
        <NavigateBeforeIcon />
      </button>
      <div className="carousel-inner">
        {visibleLinks.map((item, index) => (
          <div
            key={startIndex + index}
            className={`links-box ${startIndex + index === selectedFilter ? "selected-box" : ""}`}
            onClick={() => handleClick(startIndex + index)}
          >
            <img src={item.imgSrc} className="links-img" alt={`Image ${startIndex + index}`} />
            <p className={`links-label ${startIndex + index === selectedFilter ? "selected-label" : ""}`}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <button className="arrow-button right" onClick={handleNext} disabled={currentPage === totalPages - 1}>
        <NavigateNextIcon />
      </button>
    </div>
  );
}

export default FilterEx;

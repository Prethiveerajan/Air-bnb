import React, { useState } from "react";
import { list, list2 } from "../assets/cards-list";
import Cards from "../Components/cards/swipe";
import Filter from "../Components/Filter/Filter";
import Header from "../Components/Header/Header";

function Home({ onLoginClick, onSignupClick }) {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredList = selectedFilter === 0 
    ? list.filter(card => card.location.toLowerCase().includes(searchQuery.toLowerCase())) 
    : list2.filter(card => card.location.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="Home">
      <Header onSearch={handleSearch} /> 
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {searchQuery.length > 0 ? (
        <Cards list={filteredList} />
      ) : (
        selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />
      )}
    </div>
  );
}

export default Home;

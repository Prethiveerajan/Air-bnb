import { useState } from "react";
import { list, list2 } from "../assets/cards-list";
import Cards from "../Components/cards/swipe";
import Filter from "../Components/Filter/Filter";
import Header from "../Components/Header/Header";

function Home({ onLoginClick, onSignupClick }) {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <div className="Home">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

export default Home;



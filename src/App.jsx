import { useState } from "react";
import "./App.css";
import { list, list2 } from "./assets/cards-list";
import Cards from "./Components/cards/swipe"; 
import Filter from "./Components/Filter/Filter"; 
import Header from "./Components/Header/Header"; 

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

export default App;

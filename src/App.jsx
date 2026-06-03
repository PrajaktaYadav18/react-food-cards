import React, { useState } from "react";
import Navbar from "./Compounds/Navbar";
import Cards from "./Compounds/Cards";
import "./App.css";
import Footer from "./Compounds/Footer";
import FloatingSocial from "./Compounds/FloatingSocial";
import BackToTop from "./Compounds/BackToTop";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [favorites, setFavorites] = useState([]);

  return (
    <div>

      <Navbar setSearch={setSearch} setFilter={setFilter} />

      <Cards
        search={search}
        filter={filter}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <Footer />

      <FloatingSocial/>
      <BackToTop />

    </div>
  );
}

export default App;
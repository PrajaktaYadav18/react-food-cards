import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ setSearch, setFilter }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* ANIMATED LOGO */}
      <div className="logo">🍲 FoodExplorer</div>

      {/* SEARCH BAR */}
      <input
        className="nav-search"
        placeholder="Search food..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTER BUTTONS */}
      <div className="filters-btn">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("veg")}>Veg 🌱</button>
        <button onClick={() => setFilter("nonveg")}>Non-Veg 🍗</button>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}

export default Navbar;
import React, { useState } from "react";
import foodData from "../jsonData/foodData.json";
import "./Cards.css";

function Cards() {
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("All");
  const [likes, setLikes] = useState([]);

  const toggleLike = (index) => {
    if (likes.includes(index)) {
      setLikes(likes.filter((i) => i !== index));
    } else {
      setLikes([...likes, index]);
    }
  };

  const filteredData = foodData.filter((item) => {
    return (
      item.food.toLowerCase().includes(search.toLowerCase()) &&
      (selectedState === "All" || item.state === selectedState)
    );
  });

  const states = ["All", ...new Set(foodData.map((item) => item.state))];

  return (
    <div>
      {/* FILTER SECTION */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setSelectedState(e.target.value)}>
          {states.map((state, i) => (
            <option key={i} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* CARDS */}
      <div className="container">
        {filteredData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.food} />

            <div className="card-content">
              <h2>{item.food}</h2>
              <h4>{item.state}</h4>
              <p>{item.description}</p>

              <button onClick={() => toggleLike(index)}>
                {likes.includes(index) ? "❤️ Liked" : "🤍 Like"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
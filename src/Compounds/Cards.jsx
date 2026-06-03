import React from "react";
import foodData from "../jsonData/foodData.json";
import "./Cards.css";

function Cards({ search, filter, favorites, setFavorites }) {

  const toggleFav = (food) => {
    if (favorites.includes(food)) {
      setFavorites(favorites.filter((f) => f !== food));
    } else {
      setFavorites([...favorites, food]);
    }
  };

  const filteredData = foodData.filter((item) => {
    const matchSearch = item.food.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "all"
        ? true
        : filter === "veg"
        ? true   // (you can extend JSON later)
        : true;

    return matchSearch && matchFilter;
  });

  return (
    <div className="container">

      {filteredData.map((item, index) => (
        <div className="card" key={index}>

          <img src={item.image} alt={item.food} />

          <div className="card-content">
            <h2>{item.food}</h2>
            <h4>{item.state}</h4>
            <p>{item.description}</p>

            {/* LIKE / FAVORITE */}
            <button onClick={() => toggleFav(item.food)}>
              {favorites.includes(item.food) ? "❤️ Favorite" : "🤍 Like"}
            </button>
          </div>

        </div>
      ))}

    </div>
  );
}

export default Cards;
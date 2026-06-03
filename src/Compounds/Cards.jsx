import React from "react";
import foodData from "../jsonData/foodData.json";
import "./Cards.css";

function Cards() {
  return (
    <div className="container">
      {foodData.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt={item.food} />

          <div className="card-content">
            <h2>{item.food}</h2>
            <h4>{item.state}</h4>
            <p>{item.description}</p>

            <button>Explore Food</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
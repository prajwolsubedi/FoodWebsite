import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const filterData = function (inputText, restaurant) {
  return restaurant.filter((restaurant) =>
    restaurant.data.name.includes(inputText)
  );
};

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [restaurant, setRestaurant] = useState(restaurantList);
  return (
    <>
      <div className="search-bar-container">
        <input
          placeholder="Search"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={() => {
            if (inputText === "") {
              setRestaurant(restaurantList);
            } else {
              setRestaurant(filterData(inputText, restaurant));
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="card-container">
        {restaurant.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;

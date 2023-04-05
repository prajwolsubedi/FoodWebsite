import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const filterData = function (inputText, restaurant) {
  return restaurant.filter((restaurant) =>
    restaurant.data.name.includes(inputText)
  );
};

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [restaurant, setRestaurant] = useState(restaurantList);

  //empty dependency array [] - onetime after the initial render.
  // dependecy array[restaurant] = onetime after the initial reander and everytime the restaurant changes.
  useEffect(() => {
    //  API call
    console.log("Inside the use Effect");
    getRestaurants();
  }, []);

  console.log("render");

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2984413999999981&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <>
      <div className="search-bar-container">
        <input
          placeholder="Search"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            // setRestaurant(restaurantList)
          }}
        />
        <button
          onClick={() => {
            // if (inputText === "") {
            //   setRestaurant(restaurantList);
            // } else {
            setRestaurant(filterData(inputText, restaurant));
            // }
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

import { restaurantList } from "../constants.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI.js";

const filterData = (searchText, allRestaurant) => {
  return allRestaurant.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  //empty dependency array [] - onetime after the initial render.
  // dependecy array[restaurant] = onetime after the initial reander and everytime the restaurant changes.
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2984413999999981&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();
    //Yesto belama you have to do optional chaining because if there is not data it will break.
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurant.length === 0 || filteredRestaurant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-bar">
        <h1>Search Bar</h1>
        <input
          placeholder="Search"
          value={searchText}
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            setFilteredRestaurant(filterData(searchText, allRestaurant));
          }}
        >
          Submit
        </button>
      </div>
      <div className="card-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

/*































import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const filterData = function (inputText, restaurant) {
  return restaurant.filter((restaurant) =>
    restaurant.data.name.includes(inputText)
  );
};

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

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
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  // if(!allRestaurant) return null;

  return allRestaurant.length === 0 ? (
    <ShimmerUI />
  ) : (
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
              setFilteredRestaurant(filterData(inputText, allRestaurant));
            // }
          }}
        >
          Search
        </button>
      </div>
      <div className="card-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;


*/

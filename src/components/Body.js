import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI.js";

const filterData = (searchText, allRestaurant) => {
  return allRestaurant.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2984413999999981&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING#"
      );
      const json = await data.json();
      setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error, "mero ho hai");
      setAllRestaurant([]);
      setFilteredRestaurant([]);
    }
  }

  //undefined nai set hudo raixa value xaina vane
  return !allRestaurant || allRestaurant.length === 0 ? (
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
        {filteredRestaurant?.length === 0 ? (
          <h1>Item not found</h1>
        ) : filteredRestaurant ? (
          filteredRestaurant.map((restaurant) => (
            <RestaurantCard {...restaurant.data} key={restaurant?.data?.id} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default Body;

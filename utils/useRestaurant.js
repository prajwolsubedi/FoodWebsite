import { useState, useEffect } from "react";
import { REST_URL } from "../src/constants";

const useRestaurant = (setFilteredRestaurant) => {
  const [allRestaurant, setAllRestaurant] = useState(null);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(REST_URL);
      const json = await data.json();
      if (json?.data?.cards[2]?.data?.data?.cards) {
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      } else if (json?.data?.cards[1]?.data?.data?.cards) {
        setAllRestaurant(json?.data?.cards[1]?.data?.data?.cards);
        setFilteredRestaurant(json?.data?.cards[1]?.data?.data?.cards);
      }
      // setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error, "Error while fetching the restaurant json api");
      setAllRestaurant([]);
      setFilteredRestaurant([]);
    }
  }
  return allRestaurant;
};

export default useRestaurant;

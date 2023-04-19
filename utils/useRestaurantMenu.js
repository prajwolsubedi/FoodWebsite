import { useState, useEffect } from "react";
import { REST_MENU_URL } from "../src/constants";
const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(REST_MENU_URL + restaurantId);
    const json = await data.json();
    setRestaurantInfo(json);
  }
  return restaurantInfo;
};
export default useRestaurantMenu;

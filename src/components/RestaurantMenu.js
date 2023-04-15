import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const {restaurantId} = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        restaurantId
    );
    const json = await data.json();
    setRestaurantInfo(json);
  }
  return !restaurantInfo ? (
    <ShimmerUI />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-info">
        <h1>
          Restaurant name :
          {restaurantInfo?.data?.cards[0]?.card?.card?.info?.name}
        </h1>
        <img
          alt="image"
          src={
            IMG_CDN_URL +
            restaurantInfo?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>
          Price :
          {restaurantInfo?.data?.cards[0].card.card.info.costForTwoMessage}
        </h3>
      </div>

      <div className="menu-info">
        <h1>Menus</h1>
        <ul>
          {restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

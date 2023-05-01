import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurantInfo = useRestaurantMenu(restaurantId);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item))
  };
  const cartItem = useSelector(store => store.cart.items)

  
  return !restaurantInfo ? (
    <ShimmerUI />
  ) : (
    <div className="flex m-2 p-2">
      <div className="m-2 p-2">
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
          {restaurantInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </h3>
      </div>

      <div className="m-2">
        <h1>Menus</h1>
        <ul>
          {restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name}{" "}
                <button className="m-2 p-1 bg-red-500 rounded-xl" onClick={() => addFoodItem(item)}>Add</button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

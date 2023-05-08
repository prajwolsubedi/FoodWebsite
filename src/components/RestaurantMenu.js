import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { addItem } from "../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurantInfo = useRestaurantMenu(restaurantId);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurantInfo ? (
    <ShimmerUI />
  ) : (
    <div className="flex m-2 p-2">
      <div className="m-2 p-2">
        <h1 className="font-bold">
          {restaurantInfo?.data?.cards[0]?.card?.card?.info?.name}
        </h1>
        <img
          alt="image"
          src={
            IMG_CDN_URL +
            restaurantInfo?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
      </div>

      <div className="mt-9 ">
        <h1 className="font-bold">Menus</h1>
        <ul>
          {restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (item) => (
              <li key={item?.card?.info?.id} className="flex">
                {item?.card?.info?.name}{" "}
                <button onClick={() => addFoodItem(item)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:bg-black hover:text-white rounded-3xl transition-colors duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

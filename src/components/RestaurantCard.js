import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const RestaurantCard = ({ cloudinaryImageId, name, avgRating, cuisines }) => {
  const {newUser} = useContext(UserContext);
  return (
    <>
      <div className="w-64 text-center">
        <img
          className="rounded-lg"
          alt="image"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4> {avgRating} ⭐️ Ratings</h4>
        <h5>
          {newUser.name} - {newUser.email}
        </h5>
      </div>
    </>
  );
};

export default RestaurantCard;

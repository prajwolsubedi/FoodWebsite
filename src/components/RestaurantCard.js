import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  address,
  avgRating,
}) => {
  return (
    <div className="card">
      <img
        className="card_img"
        alt="image"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{address}</h4>
      <h5>{avgRating} ⭐️ rating</h5>
    </div>
  );
};

export default RestaurantCard;

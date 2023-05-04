import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ imageId, name, price }) => {
  return (
      <div className="m-2 p-2 text-center w-64">
        <img
          className="rounded-lg"
          alt="image"
          src={IMG_CDN_URL + imageId}
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>rupee - {price/100}</h3>
      </div>
  );
};

export default RestaurantCard;

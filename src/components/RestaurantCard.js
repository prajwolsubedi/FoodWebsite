import {IMG_CDN_URL} from "../constants"

const RestaurantCard = ({cloudinaryImageId,name,avgRating,cuisines}) => {
  return(
    <>
      <div className="card">
          <img className="card-img" alt="image" src={IMG_CDN_URL + cloudinaryImageId} />
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4> {avgRating} ⭐️ Ratings</h4>
      </div>
    </>
  )
}

export default RestaurantCard;

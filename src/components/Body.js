import RestaurantCard from "./RestaurantCard.js";
import { useState, useContext } from "react";
import ShimmerUI from "./ShimmerUI.js";
import { Link } from "react-router-dom";
import { filterRestaurant } from "../../utils/helper.js";
import useOnline from "../../utils/useOnline.js";
import useRestaurant from "../../utils/useRestaurant.js";
import UserContext from "../../utils/UserContext.js";
const Body = () => {
  const { newUser, setNewUser } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const allRestaurant = useRestaurant(setFilteredRestaurant);
  const isOnline = useOnline();

  if (!isOnline)
    return (
      <h1 className="m-2 p-2 text-bold text-8xl">Oops you are offline!</h1>
    );
  //undefined nai set hudo raixa value xaina vane
  return !allRestaurant || allRestaurant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="p-5 bg-pink-50">
        <input
          className="border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 p-2 m-2 focus:bg-green-50"
          placeholder="Search"
          value={searchText}
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-2 p-1 bg-purple-600 text-white rounded-lg hover:bg-purple-900 text-sm"
          type="submit"
          onClick={() => {
            setFilteredRestaurant(filterRestaurant(searchText, allRestaurant));
          }}
        >
          Submit
        </button>
        {/* <input
          value={newUser.name}
          onChange={(e) =>
            setNewUser({
              newUser: {
                ...newUser,
                name: e.target.value,
              },
            })
          }
        />
        <input
          value={newUser.email}
          onChange={(e) =>
            setNewUser({
              newUser: {
                ...newUser,
                email: e.target.value,
              },
            })
          }
        /> */}
      </div>

      <div className="m-5 flex flex-wrap justify-between shadow-100">
        {filteredRestaurant?.length === 0 ? (
          <h1>Item not found</h1>
        ) : filteredRestaurant ? (
          filteredRestaurant?.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default Body;

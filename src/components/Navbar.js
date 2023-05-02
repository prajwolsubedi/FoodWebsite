import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isOnline = useOnline();
  const [login, setLogin] = useState(false);
  const handleLoginClick = () => {
    setLogin((prevLogin) => !prevLogin);
  };
  const cartItem = useSelector((store) => store.cart.items);
  return (
    <div className="flex m-1 justify-between bg-pink-50 shadow-lg">
      <h1 className="text-3xl pl-2">
        <Link to="/">BvJhole</Link>
      </h1>
      <div className="nav-items">
        <ul className="flex py-2 mr-3">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart - {cartItem.length}</Link>
          </li>
          <li className="px-2">{isOnline ? "✅" : "🔴"}</li>
        </ul>
        {/* <span className="p-2 font-bold m-1">{user.name}</span> */}
        {login ? (
          <button onClick={() => handleLoginClick()}>LogOut</button>
        ) : (
          <button onClick={() => handleLoginClick()}>LogIn</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

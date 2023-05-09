import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import { useSelector } from "react-redux";
import KFC_LOGO from "../assests/img/kfc.png";

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
        <Link to="/">
          <img data-testid="logo" src={KFC_LOGO} className="w-20" />
        </Link>
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
            <Link to="/cart" data-testid="cart-item">
              Cart - {cartItem.length}
            </Link>
          </li>
          <li data-testid="online-status" className="px-2">
            {isOnline ? "✅" : "🔴"}
          </li>
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

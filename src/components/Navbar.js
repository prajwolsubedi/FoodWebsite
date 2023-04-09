import { useState } from "react";


const Navbar = () => {
  const [login, setLogin] = useState(false);
  const handleLoginClick = () => {
    setLogin((prevLogin) => !prevLogin);
  } 
  return (
    <div className="nav-container">
      <a href="/">
        <h1 className="heading">BvJhole</h1>
      </a>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>

        {login ? (
          <button
            onClick={() => handleLoginClick()}
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={() => handleLoginClick()}
          >
            LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

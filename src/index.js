import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

/* 
  Navbar
    -logo
    -navitems
  Body
    -searchbar
    -restaurant list
      -items card(many)
        .image
        .price
        .rating
        .name
  Footer
  🌟⭐️🎖️
*/

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

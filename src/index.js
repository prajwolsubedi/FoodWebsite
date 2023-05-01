import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ShimmerUI from "./components/ShimmerUI";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./components/Cart";

// import Instamart from "./components/Instamart";
const Instamart = lazy(() => import("./components/Instamart"));

//on demand loading garda react will try to load the component which code is not present currently so it will suspend the loading so first choti ma component load hudaina but after the js file is loaded we can go to the page
const AppLayout = () => {
  const [newUser, setNewUser] = useState({
    newUser: {
      name: "Prajwol",
      email: "PrajwolSubedizzz@gmail.com",
    },
  });
  const values = { ...newUser, setNewUser };
  
  return (
    //You can provide this store only to the certain portion of the app also.
    <Provider store={store}>
      <UserContext.Provider value={values}>
        <Navbar />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

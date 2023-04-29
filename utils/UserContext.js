import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Random Name",
    email: "RandomEmail@gmail.com",
  }
});

export default UserContext;

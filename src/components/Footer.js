import { useContext } from "react";
import UserContext from "../../utils/UserContext";
const Footer = () => {
  const {newUser} = useContext(UserContext)
  return (
    <div className="m-2 p-2">
      <h2 className="m-2 p-2">This is Footer part.</h2>
      <h3>
        This Site is Developed by {newUser.name} - {newUser.email}
      </h3>
    </div>
  );
};

export default Footer;

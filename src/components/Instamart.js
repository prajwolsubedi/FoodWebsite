import { useState } from "react";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";
const Section = ({ user, isVisible, setIsVisible }) => {
  const {newUser} = useContext(UserContext);
  return (
    <>
      <h1>{newUser.name}</h1>
      <div className="m-2 p-2 border-2 border-black">
        <h1>{user}</h1>
        <button
          onClick={(e) => {
            e.target.innerHTML === "Hide"
              ? setIsVisible("")
              : setIsVisible(user);
          }}
          className="underline decoration-red-900 text-blue-600"
        >
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible ? (
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <>
      <Section
        user={"Prajwol"}
        isVisible={visibleSection === "Prajwol"}
        setIsVisible={(value) => setVisibleSection(value)}
      />
      <Section
        user={"Srijan"}
        isVisible={visibleSection === "Srijan"}
        setIsVisible={(value) => setVisibleSection(value)}
      />
      <Section
        user={"BestVersion"}
        isVisible={visibleSection === "BestVersion"}
        setIsVisible={(value) => setVisibleSection(value)}
      />
    </>
  );
};

export default instamart;

import React from "react";
import { Outlet } from "react-router-dom";

// const About = () => {
//   return (
//     <>
//           <div>
//         <h1> Best Restaurant in the Town. You may want to indulge 🍟🍔</h1>
//         <Profile name={"Prajwol -> Function"} />
//         <Profile1 name={"Prajwol -> Class"}/>
//         {/* <Outlet /> */}
//       </div>
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent - Constructor");
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    // console.log("Parent - ComponentDidMount called");
  }

  componentDidUpdate() {
    // console.log("Parent - componentDidUpdate called");
  }

  componentWillUnmount() {
    // console.log("Parent - componentWillUnmount called");
  }

  render() {
    return (
      <div>
        <h1> Best Restaurant in the Town. You may want to indulge 🍟🍔</h1>
        <Outlet />
      </div>
    );
  }
}

export default About;

import React from "react";
class Profile1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      user: {},
    };
    console.log("Child - Constructor Called" + this.props.name);
  }

  async componentDidMount() {
    //Will be called after render like useEffect in functional component
    console.log("Child - Component Did Mount Called");
    this.timer = setInterval(() => {
        console.log("Hello");
    },1000)
  }

  componentDidUpdate() {
    console.log("Child - componentDidUpdate called");
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log("Child - componentWillUnmount called");
  }

  render() {
    const { avatar_url, name } = this.state.user;
    console.log(" Child - Rendered " + this.props.name);
    return (
      <>
        <h2>Profile Class Component</h2>
        <img src={avatar_url} />
        <h3>Name: {name}</h3>
      </>
    );
  }
}
export default Profile1;

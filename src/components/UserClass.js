import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor call");

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default location",
      },
    };
  }
  async componentDidMount() {
    console.log("Child component Did Mount");
    //Api Call
    const data = await fetch("https://api.github.com/users/sriyaT");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    this.timer = setInterval(() => {
      console.log("Learning react OP");
    }, 1000);
    if (this.state.count !== prevState.count) {
      //code
    }
    console.log("component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component will unmount");
  }
  render() {
    console.log("render happening");
    const { name, location, twitter_username, avatar_url } =
      this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="user-photo" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {twitter_username}</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 * Mounting Life cycle
 * Constructor
 * render(dummy data)
 *
 * <HTML> or component has dummy data
 * ComponentDidMount called and <api call > done --> this.setState is updated with new data
 *
 *
 * update cycle begins
 * render calls again with new data
 * Html is rendered with new api data
 *
 * ComponentDidUpdate is called
 *
 *
 * So we have seen that,
 *
 * 1st Mounting cycle happens
 * updating cycle happens
 * we will now see how unmounting cycle happens:
 *
 * component will unmount will be called when component will be removed from our webpage,
   here if we 're switching from aboutus page to contact us or home page, 
   ComponentWillUnmount will be called.

 *
 */

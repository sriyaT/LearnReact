import React from "react";
import User from "./user";
import UserContext from "../utils/userContext";
import UserClass from "./userClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component Did Mount");
  }
  render() {
    return (
      <div className="about">
        <h1>About Class Component</h1>
        <h4>This is Learn React Web Series!!</h4>
        <div>
          <UserContext.Consumer>
            {(data) => {
              return (
                <h1 className="font-bold">
                  LoggedIn User :{data?.loggedInUser}
                </h1>
              );
            }}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"sriya (class)"}
          location={"Bangalore (class)"}
          contact={"sriya@94 (class)"}
        />
      </div>
    );
  }
}

export default About;

/* Lifecycle method when a parent has multiple childs:

let's say we have 2 childs, i.e child1, child2.

1. Parent constructor
2. Parent render
3. child1 constructor
4. child1 render
5. child2 constructor
6. child2 render

<DOM Manipulation In Single batch>
<Diff is calculated, re-concilation process is called>
7. child1 ComponentDidMount
8. child2 ComponentDidMount
9. Parent ComponentDidMount

*/

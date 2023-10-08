import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class Users extends Component {
  constructor() {
    super()
    this.state = {
      showUsers: true,

      //To define state call the constructor function
      //with class-based component, your state is ALWAYS an object but with functional component, your state can be anything. All the states must be grouped into one object no matter if they are related or not
    };
  }

  toggleUsersHandler() {
    //this.state=!this.state.showUsers //WRONG
    this.setState((currentState) => {
      return {
        showUsers: !currentState.showUsers,
      };
    });
  }
//The setState method always returns an object that contains all properties of the state object so you just pick the one you are interested in and update it 

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}


export default Users;

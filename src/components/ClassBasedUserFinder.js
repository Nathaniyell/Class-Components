import React, { Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      fileredUsers: DUMMY_USERS,
      searchTerm: "",
    };
  }
  serchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.filteredUsers} />
      </>
    );
  }
}

export default UserFinder;

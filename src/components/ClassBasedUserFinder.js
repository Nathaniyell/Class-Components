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

  componentDidUpdate(prevProps, prevState){
if(prevState.searchTerm !== this.state.searchTerm){
    this.setState({
        filteredUsers:DUMMY_USERS.filter(user=>user.name.includes(this.state.searchTerm))
    })
}
  //componentDidUpdate provides us with two parameters which allows us to check if the state of a particular property was changed before the effect is rerun so as not to create an infinite loop and rerun the effect each time any part of this component is changed
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

import React, { Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";
import UsersContext from "../store/users-context";

class UserFinder extends Component {
  static contextType = UsersContext; //imports the context to be accessed by this component
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }
componentDidMount(){
  this.setState({ filteredUsers: this.context.users})
}
  componentDidUpdate(prevProps, prevState){
if(prevState.searchTerm !== this.state.searchTerm){
    this.setState({
      filteredUsers:this.context.users.filter(user=>user.name.includes(this.state.searchTerm))
    })
}
  //componentDidUpdate provides us with two parameters which allows us to check if the state of a particular property was changed before the effect is rerun so as not to create an infinite loop and rerun the effect each time any part of this component is changed
  }

  searchChangeHandler(event) {
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
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

export default UserFinder;

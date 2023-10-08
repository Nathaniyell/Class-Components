import { Component } from 'react';
import classes from './User.module.css';


class User extends Component{
render(){
  return <li className={classes.user}>{this.props.name}</li> // `props` is a property of the React.Component object so you do not need to specify it as a parameter
}
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;

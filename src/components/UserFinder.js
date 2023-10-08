import {useState, useEffect } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </>
  );
};

export default UserFinder;

/*
-componentDidMount() - called once the component mounts the DOM and is evaluated and rendered. It is similar to useEffect(..., [])
-componentDidUpdate() - called once there is any change in your state and the component is re-evaluated and rerendered. it is similar to the useEffect(..., [someValue]), where the `someValue` determines when the effect is rerun
-componentWillUnmount() - is called right before the component is removed from the DOM. The equivalent is the cleanUp function of the useEffect. useEffect(()=>{return()=>{...}}, [])
*/
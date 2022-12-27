import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

  const addUserHandler = (event) => {
    event.preventDefault();
  }  
  const onClick = (event) => {

  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"/>
  
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"/>
  
        {/* <button type="submit">Add User</button> */}
        <Button type="submit" className="">Add User</Button>
      </form>
    </Card>
  )
};

export default AddUser;
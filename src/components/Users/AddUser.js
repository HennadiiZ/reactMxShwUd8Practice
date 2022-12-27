import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');  

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(event.target);
    console.log(enteredUsername, enteredUserAge);
  };

  const usernameChangeHandler = (event) => {
    // console.log('name', event.target.value);
    setEnteredUsername(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    // console.log('age', event.target.value);
    setEnteredUserAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>

        <label htmlFor="username">Username</label>
        <input 
          id="username" 
          type="text" 
          onChange={usernameChangeHandler}
        />
  
        <label htmlFor="age">Age (Years)</label>
        <input 
          id="age" 
          type="number"
          onChange={userAgeChangeHandler}
        />
  
        {/* <button type="submit">Add User</button> */}
        <Button type="submit" className="">Add User</Button>
      </form>
    </Card>
  )
};

export default AddUser;
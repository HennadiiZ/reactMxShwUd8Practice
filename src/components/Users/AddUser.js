import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');  

//   let allertMessage = '';

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(event.target);
    if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
    //   allertMessage = 'Invalid Data!';
      return;
    }
    if (+enteredUserAge < 1) {
    //   allertMessage = 'age must be greater that zero.';
      return;
    }
    console.log(enteredUsername, enteredUserAge);
    // allertMessage = '';
    setEnteredUsername('');
    setEnteredUserAge('');
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
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
  
        <label htmlFor="age">Age (Years)</label>
        <input 
          id="age" 
          type="number"
          value={enteredUserAge}
          onChange={userAgeChangeHandler}
        />
  
        {/* <button type="submit">Add User</button> */}
        <Button type="submit" className="">Add User</Button>
      </form>
    </Card>
  )
};

export default AddUser;
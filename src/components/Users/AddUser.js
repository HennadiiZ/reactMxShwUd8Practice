import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');  

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
    //   allertMessage = 'Invalid Data!';
      return;
    }
    if (+enteredUserAge < 1) {
    //   allertMessage = 'age must be greater that zero.';
      return;
    }
    console.log(enteredUsername, enteredUserAge);

    props.onAddUser(enteredUsername, enteredUserAge);

    setEnteredUsername('');
    setEnteredUserAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  return (
    <>
      <ErrorModal title="An error occured!" message="Something went wrong!"/>
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
          <Button type="submit" className="">Add User</Button>
        </form>
      </Card>
    </>
  )
};

export default AddUser;
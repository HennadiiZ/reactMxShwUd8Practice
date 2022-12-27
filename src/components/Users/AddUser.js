import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');  
  const [error, setError] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age"
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0)"
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredUserAge);


    setEnteredUsername('');
    setEnteredUserAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    setError(null);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
    setError(null);
  };

  const closeModalHandler = () => {
    setError(null);
  }

  return (
    <>
      { error && <ErrorModal title={error.title} message={error.message} onCloseModal={closeModalHandler}/> }
      { !error && <Card className={classes.input}>
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
      </Card>}
    </>
  )
};

export default AddUser;
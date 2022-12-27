import React, { useState } from 'react';
import  AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const users = [
  // { name: "Hennadii", age: "34", id: 1 },
];

function App() {

  const [usersList, setUsersList] = useState(users);

  function addUsertHandler(name, age) {
    setUsersList((prevUsersList) =>  [...prevUsersList, {name, age, id: Math.random().toString()}]);
  }

  return (
    <div>
      < AddUser onAddUser={addUsertHandler}/>
      { (usersList.length > 0) && < UsersList users={usersList}/>}
    </div>
  );
}

export default App;

import React from 'react';
import  AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const users = [
  { name: "Hennadii", age: "34", id: 1 },
];

function App() {
  return (
    <div>
      < AddUser/>
      < UsersList users={[]}/>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';



function App() {
  const addUserHandler = (uName, uAge) => {
      setUsersList((prev) => {
        return [...prev, {name: uName, age: uAge, id: Math.random().toString()}];
      });
  }

  const [usersList, setUsersList] = useState([]);
  return (
    <>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users = {usersList}/>
    </>
  );
}

export default App;

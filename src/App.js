import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';



function App() {
  const addUserHandler = (uName, uAge) => {
      setUsersList((prev) => {
        return [...prev, {name: uName, age: uAge}];
      });
  }

  const [usersList, setUsersList] = useState([]);
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users = {usersList}/>
    </div>
  );
}

export default App;

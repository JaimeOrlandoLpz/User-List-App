import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserEventHandler = (event) =>{
        event.preventDefault(); 
        console.log(enteredAge, enteredUserName);

    }

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return(
    <Card className = {styles.input}>
        <form onSubmit={addUserEventHandler}>
            <label htmlFor="username">Username</label>
            <input id = "username" type="text" onChange = {usernameChangeHandler}/>
            <label htmlFor="age">Age in years</label>
            <input id = "age" type="number" onChange = {ageChangeHandler}/>
            <Button type = "submit">
                Add User
            </Button>
        </form>
    </Card>
    );
}

export default AddUser;
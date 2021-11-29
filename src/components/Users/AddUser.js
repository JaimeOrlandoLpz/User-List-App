import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserEventHandler = (event) =>{
        event.preventDefault(); 
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            // Finish execution of the function if any of the User Inputs was left empty
            return;
        }
        
        // +enteredAge transforms enteredAge from string to number
        if(+enteredAge < 1){
            // Finish the execution of the function if the age isn't a valid number
            return;
        }
        
        console.log(enteredAge, enteredUserName);
        setEnteredUserName('');
        setEnteredAge('');

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
            <input id = "username" type="text" onChange = {usernameChangeHandler} value={enteredUserName}/>
            <label htmlFor="age">Age in years</label>
            <input id = "age" type="number" onChange = {ageChangeHandler} value={enteredAge}/>
            <Button type = "submit">
                Add User
            </Button>
        </form>
    </Card>
    );
}

export default AddUser;
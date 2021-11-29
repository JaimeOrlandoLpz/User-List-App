import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserEventHandler = (event) =>{
        event.preventDefault(); 
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            // Update Error and Finish Function Execution
            setError({title: "Empty Value(s)", message: "Please fill in every value"});
            return;
        }
        
        // +enteredAge transforms enteredAge from string to number
        if(+enteredAge < 1){
            // Update error and finish execution if age isn't a valid number
            setError({title: "Invalid Age", message: "Please enter a valid age"});
            return;
        }
        
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');

    }

    const errorHandler = () => {
        setError(null);
    }

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return(
    <div>
        {/* Conditionally render error modal*/}
        { error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}></ErrorModal> }
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
    </div>
    );
}

export default AddUser;
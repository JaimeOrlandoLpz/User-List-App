import React, {useState, useRef} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css'

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUserName, setEnteredUserName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');

    const [error, setError] = useState();

    const addUserEventHandler = (event) =>{
        event.preventDefault(); 
        const enteredName = nameInputRef.current.value; // Access directly tbe value of the input DOM element
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            // Update Error and Finish Function Execution
            setError({title: "Empty Value(s)", message: "Please fill in every value"});
            return;
        }
        
        // +enteredAge transforms enteredAge from string to number
        if(+enteredUserAge < 1){
            // Update error and finish execution if age isn't a valid number
            setError({title: "Invalid Age", message: "Please enter a valid age"});
            return;
        }
        
        props.onAddUser(enteredName, enteredUserAge);

        // Reset values directly through the DOM (BAD PRACTICE)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

        // setEnteredUserName('');
        // setEnteredAge('');

        // We won't use states anymore, as we use refs to get the values

    }

    const errorHandler = () => {
        setError(null);
    }

    // const usernameChangeHandler = (event) => {
    //     setEnteredUserName(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    return(
    <div>
        {/* Conditionally render error modal*/}
        { error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}></ErrorModal> }
        <Card className = {styles.input}>
            <form onSubmit={addUserEventHandler}>
                <label htmlFor="username">Username</label>
                <input id = "username" type="text" /*onChange = {usernameChangeHandler} value={enteredUserName} */ ref = {nameInputRef}/>
                <label htmlFor="age">Age in years</label>
                <input id = "age" type="number" /* onChange = {ageChangeHandler} value={enteredAge}*/ ref = {ageInputRef}/>
                <Button type = "submit">
                    Add User
                </Button>
            </form>
        </Card>
    </div>
    );
}

export default AddUser;
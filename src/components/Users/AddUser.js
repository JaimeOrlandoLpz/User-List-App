import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const addUserEventHandler = (event) =>{
        event.preventDefault(); 
    }

    return(
    <Card className = {styles.input}>
        <form onSubmit={addUserEventHandler}>
            <label htmlFor="username">Username</label>
            <input id = "username" type="text"/>
            <label htmlFor="age">Age in years</label>
            <input id = "age" type="number"/>
            <Button type = "submit">
                Add User
            </Button>
        </form>
    </Card>
    );
}

export default AddUser;
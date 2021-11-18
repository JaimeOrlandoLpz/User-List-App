import React from 'react';

const AddUser = (props) => {
    const addUserEventHandler = (event) =>{
        event.preventDefault();
    }

    return(
    <form onSubmit={addUserEventHandler}>
        <label htmlFor="username">Username</label>
        <input id = "username" type="text"/>
        <label htmlFor="age">Age in years</label>
        <input id = "age" type="number"/>
        <button type = "submit">
            Add User
        </button>
    </form>
    );
}

export default AddUser;
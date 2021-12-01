import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Card from './Card';

import styles from './ErrorModal.module.css'

// Error Message when the User makes an error

const Backdrop = (props) => {
    return(
        <div className = {styles.backdrop} onClick = {props.onConfirm}></div>
    ); 
}

const ModalOverlay = (props) => {
    return(
        <Card className= {styles.modal}>
        <header className = {styles.header}>
            <h2>{props.title}</h2>
        </header>

        <div className = {styles.content}>
            <p>
                {props.message}
            </p>
        </div>

        <footer className = {styles.actions}>
            <Button onClick = {props.onConfirm}>OKAY</Button>
        </footer>
    </Card>
    );
}

const ErrorModal = props => {
    return(
        <>
            {/* Use React DOM to  create Portal and link our component with the real DOM place where we want to teleport it*/}
            {ReactDOM.createPortal(<Backdrop onConfirm = {props.onConfirm}/>, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay title = {props.title} message = {props.message} onConfirm = {props.onConfirm}/>, document.getElementById("modal-root"))}
        </>
    );
}

export default ErrorModal;
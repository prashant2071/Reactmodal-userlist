import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css'

const ErrorModal  = (props) =>{
return(
    <div>
    <div className={classes.backdrop} onClick={props.onConfirm}>
<Card className={classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div><p>{props.message}</p></div>
    <footer className={classes.actions}>
        <Button onClick={props.onConfirm} > okay</Button>
    </footer>
</Card>
</div>
</div>);
}
export default ErrorModal;
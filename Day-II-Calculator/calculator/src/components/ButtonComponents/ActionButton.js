import React from 'react';
import './Button.css';


const ActionButton = (props) =>{
    return(
        <button className={`buttonstyle ${props.type}`}>{props.text}</button>
    );
};

export default ActionButton;
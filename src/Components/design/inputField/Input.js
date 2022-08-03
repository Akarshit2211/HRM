import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    console.log(props.value);
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
    }

    // const changeHandler = (event) => {
    //     console.log(event.target.value);
    //     // props.changed;
    // }

    if(props.elementType == 'input'){
        inputElement = <input 
                            className = {inputClasses.join(' ')}
                            {...props.elementConfig}
                            value = {props.value}
                            onChange = {props.changed}
                        />;
    }

    return (
        <React.Fragment>
            {/* <label className = {classes.label}>{props.label}</label> */}
            {inputElement}
        </React.Fragment>
    )
}

export default input;
import React from 'react';
import classess from './inputField.module.css';

const inputField = (props) => {
    return (
        <React.Fragment>
            <input type = {props.type} placeholder = {props.placeholder} />
        </React.Fragment>
    )
}
export default inputField;
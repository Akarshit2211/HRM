import React from 'react';
import classes from './navItem.module.css';

const navItem = (props) =>{
    return (
        <div className = {classes.navItem}>
            <a className = {classes.link} href = {props.link}>{props.name}</a>
        </div>
    )
}

export default navItem;
import React from 'react';
import classes from './landingInfo.module.css';

const landingInfo = () => {
    return (
        <div className = {classes.info}>
            <h2 className = {classes.head1}>Busy with some other work, let us handle some</h2>
            <h1 className = {classes.head2}>Manage employee leaves and salary here.</h1>
        </div>
    )
}

export default landingInfo;
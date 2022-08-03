import React from 'react';
import classes from './landingPage.module.css';
import Navbar from '../../Components/design/navbar/navbar';
import LandingInfo from '../../Components/landingInfo/landingInfo';

const landingPage = () => {
    return (
        <React.Fragment>
            <Navbar list = {["Login", "About", "Contact"]} />
            <LandingInfo />
        </React.Fragment>
    )
}

export default landingPage;
import React from 'react';
import classes from './navbar.module.css';
import NavItem from '../navitems/navitem';
import Logo from '../Logo/logo';

const navbar = (props) => {
    return (
        <React.Fragment>
            <div className = {classes.navbar}>
                <Logo />
                <ul style = {{listStyle: 'none', display: 'flex'}}>
                    {props.list.map((linkName) => {
                        return (
                            <li>
                                <NavItem name = {linkName} link = "/" />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default navbar;
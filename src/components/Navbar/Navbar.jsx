import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav__item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.nav__item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.nav__item}>
            <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.nav__item}>
                <a href="">Music</a>
            </div>
            <div className={classes.nav__item}> 
                <a href="">Settings</a>
            </div>
            <div className={classes.nav__item}>
            <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
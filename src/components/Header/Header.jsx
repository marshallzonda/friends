import React from 'react';
import { NavLink } from 'react-router-dom';
import header from './Header.module.css';

const Header = (props) => {
    return (
        <header className={header.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/1024px-Friends_logo.svg.png" alt="" />
            <div className={header.loginBlock}>
                {props.isAuth? props.login :<NavLink to={'/login'}>Login</NavLink>}
                
            </div>
        </header>
    )
}

export default Header;
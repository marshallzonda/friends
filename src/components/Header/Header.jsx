import React from 'react';
import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/1024px-Friends_logo.svg.png" alt="" />
        </header>
    )
}

export default Header;
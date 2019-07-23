import React from 'react';
import { Link } from 'react-router-dom';

import './app-header.scss';


function logout() {
    console.log("You've been logged out");
}

function Header() {
    return (
        <header>
            <Link to="/">Заголовок</Link>
            <div className="rightElements">
                <span>Вы вошли как Ivan |</span>
                <Link to="#" onClick={logout()}>Выйти</Link>
            </div>
        </header>
    )
}



export default Header;
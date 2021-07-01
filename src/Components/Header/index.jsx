import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <nav className={s.navBar}>
            <div className={s.header}>
                <NavLink to='/pageone'>Страница 1</NavLink>
            </div>
            <div className={s.header}>
                <NavLink to='/pagetwo'>Страница 2</NavLink>
            </div>
            <div className={s.header}>
                <NavLink to='/pagefree'>Страница 3</NavLink>
            </div>
        </nav>)
}


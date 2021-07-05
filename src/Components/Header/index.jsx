import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <nav className={s.navBar}>
            <div className={s.header}>
                <NavLink to='/liagueslist'>Список лиг</NavLink>
            </div>
            <div className={s.header}>
                <NavLink to='/teamslist'>Список команд</NavLink>
            </div>
            <div className={s.header}>
                <NavLink to='/calendarleague'>Календарь лиги</NavLink>
            </div>
            <div className={s.header}>
                <NavLink to='/calendaroneteam'>Календарь одной команды</NavLink>
            </div>
        </nav>)
}


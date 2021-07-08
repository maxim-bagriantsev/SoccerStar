import React from 'react';
import './HomePage.css';

export const HomePage = () => {
    return (
        <div>
            <div className="homePage">
                <img className='homePage_img'
                     src={'https://cdn.pixabay.com/photo/2013/07/13/10/49/ball-157860_960_720.png'}/>
                <h2 className='homePage_heading'>
                    Описание сайта
                </h2>
                <p className='descriptionSPA'>
                    Здравствуйте.
                    Меня зовут Багрянцев Максим и это первый мой реализованный проект с испльзованием фреймворка React.
                    Данный сервис предоставляет информацию и статистику футбольных матчей в реальном времени.
                </p>
            </div>
        </div>
    )
}
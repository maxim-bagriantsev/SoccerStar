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
                <div>
                    <p className='descriptionSPA'>
                        Здравствуйте.
                        Меня зовут Багрянцев Максим и это первый мой проект с испльзованием фреймворка React.
                        Данный сервис предоставляет информацию и статистику футбольных матчей в реальном времени.
                        В связи с тем, что это не коммерческий проект, полный доступ предоставляется только по 12 соревнованиям.
                    </p>
                    <h4 className='homePage_heading_heading'>
                        Ниже прдеставлен список лиг с полностью бесплатным доступом.
                    </h4>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import './HomePage.css';

export const HomePage = () => {
    return (
        <div>
            <div className="homePage">
                <img className='homePage_img'
                     src={'https://cdn.pixabay.com/photo/2013/07/13/10/49/ball-157860_960_720.png'}/>
                <h2 className='homePage_heading'>
                    SoccerStat
                </h2>
                <div>
                    <p className='descriptionSPA'>
                        Здравствуйте!
                        Меня зовут <span>Багрянцев Максим</span>  и это первый мой проект.
                        Данный проект является входным тестовым заданием на курс Frontend-практикум online oт IT-компании <span>SimbirSoft</span>.
                        <p>Согласно техническому заданию <a href='https://disk.yandex.ru/i/TjtkwVKNd34xAQ' target='technical'> (Cсылка на ТЗ)</a> </p>
                        <li>Сайт - приложение (SPA) предоставляет сервис статистики ведущих европейских турниров по
                            футболу.
                        </li>
                        <li>
                            В проекте используется JavaScript-библиотека <span>React</span> .
                        </li>
                        <li>UI библиотека <span>Ant Design</span> .</li>

                        <li>В качестве публичного API для получения данных использовался ресурс: <span>https://www.football-data.org/</span>.
                        </li>

                    </p>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import './HomePage.css';

export const HomePage = () => {
    return (
        <div>
            <div className="homePage">
                <img className='homePage_img' src={'https://cdn.pixabay.com/photo/2013/07/13/10/49/ball-157860_960_720.png'}/>
                <h2 className='homePage_heading'>
                    Описание сайта
                </h2>
                <p className='descriptionSPA'>
                    Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла
                    Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла
                    Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла
                </p>
            </div>
        </div>
    )
}
import React, {useEffect, useState} from 'react';
import axios from "axios";
import s from './api.module.css'

export const Api = () => {
    const count = 1;
    const [competitionsData, setCompetitionsData] = useState(null); //Тут будут данные с сервера
    const [isCompetitionsLoaded, setIsCompetitionsData] = useState(false);// Это состояние для того, чтобы понять загрузились наши данные с сервера или нет

    // eslint-disable-next-line no-unused-expressions
    useEffect(() => {
        axios.get('/competitions/').then((response) => {
            setCompetitionsData(response.data); // Устанавливаем данные в состояние
        }).catch((err) => {
            console.log('err');
        }).finally(() => {
            setIsCompetitionsData(true)// говорим, что данные точно загружены (неважно - произошла ошибка или нет)
        })
    }, []);

    if (!isCompetitionsLoaded) {// если данные не загружены показываем спиннер
        return <p>Loaded...</p>
    }

    return (
        <table className={s.table}>
            <tr>
                <th>Имя лиги</th>
                <th>Год проведения</th>
                <th>Место проведения</th>
            </tr>
            {competitionsData.competitions.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.area.id}</td>
                    <td>{item.area.name}</td>
                </tr>
            ))
            })}
        </table>
    )
}




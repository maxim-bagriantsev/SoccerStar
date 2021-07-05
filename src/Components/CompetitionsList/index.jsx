import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import s from './api.module.css'
import {getCompetitionsList} from "../../api/competitions";

export const CompetitionsList = () => {
    const [competitionsData, setCompetitionsData] = useState(null); //Тут будут данные с сервера
    const [isCompetitionsLoaded, setIsCompetitionsLoaded] = useState(false);// Это состояние для того, чтобы понять загрузились наши данные с сервера или нет


    useEffect(() => {
        getCompetitionsList ().then((data)=>{
            setCompetitionsData(data)
        })
            .catch((err) => {
                console.log('err');
            }).finally(() => {
            setIsCompetitionsLoaded(true)// говорим, что данные точно загружены (неважно - произошла ошибка или нет)
        })
    }, []);

    if (!isCompetitionsLoaded) {// если данные не загружены показываем спиннер
        return <p>Loaded...</p>
    }

    return (
        <table className={s.table}>
            <tr>
                <th>Название лиги</th>
                <th>Дата начала сезона</th>
                <th>Место проведения</th>
            </tr>
            {competitionsData.competitions.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.area.id}</td>
                    <td>{item.area.name}</td>
                </tr>
            ))
            }
        </table>
    )
}




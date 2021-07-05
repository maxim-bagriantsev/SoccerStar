import React, {useEffect, useState} from 'react';
import axios from "axios";
import s from './api.module.css'

export const Api = () => {
    const [competitionsData, setCompetitionsData] = useState(null); //Тут будут данные с сервера
    const [isCompetitionsLoaded, setIsCompetitionsData] = useState(false);// Это состояние для того, чтобы понять загрузились наши данные с сервера или нет


    useEffect(() => {
        let axios = require("axios").default;
        let options = {
            method: 'GET',
            url: 'https://api.football-data.org/v2/competitions/EL/matches',
            headers: {
                'x-auth-token': 'b0cc176056174cd6bc7bfd20a5a11fd9',
            }
        }
        axios.request(options).then((response) => {
            setCompetitionsData(response.data);
            console.log(response.data)
        }).catch((err) => {
            console.log('err');
        }).finally(() => {
            setIsCompetitionsData(true)// говорим, что данные точно загружены (неважно - произошла ошибка или нет)
        })

    }, []);

    if (!isCompetitionsLoaded) {// если данные не загружены показываем спиннер
        return <p>Loaded...</p>
    }

    return /*(
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
    )*/
}




import React, {useEffect, useState} from 'react';

import 'antd/dist/antd.css';
import '../CompetitionsList/index.css';
import {Table, Input, Button, Space } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import {getCompetitionsList} from "../../api/competitions";


export const CompetitionsList = () => {
    const [competitionsData, setCompetitionsData] = useState(null); //Тут будут данные с сервера
    const [isCompetitionsLoaded, setIsCompetitionsLoaded] = useState(false);// Это состояние для того, чтобы понять загрузились наши данные с сервера или нет


    useEffect(() => {
        getCompetitionsList().then((data) => {
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

    const culumns = [ // Название колонок в таблице
        {
            title: "Название соревнования",
            dataIndex: "nameCompetition",
            key: "nameCompetition",
            render: (text) => <a>{text}</a>
        },
        {
            title: "Местро проведения",
            dataIndex: "area",
            key: "area",
            render: (text) => <a>{text}</a>
        },
        {
            title: "Код страны",
            dataIndex: "countryCode",
            key: "countryCode",
            render: (text) => <a>{text}</a>
        },
        {
            title: "Дата начала соревнований",
            dataIndex: "startDate",
            key: "startDate",
            render: (text) => <a>{text}</a>
        },
        {
            title: "Дата окончания соревнований",
            dataIndex: "andDate",
            key: "andDate",
            render: (text) => <a>{text}</a>
        },
        {
            title: "Код лиги",
            dataIndex: "leagueCod",
            key: "leagueCod",
            render: (text) => <a>{text}</a>
        },
        {
            title: "Фдаг страны",
            dataIndex: "countryFlag",
            key: "countryFlag",
            render: (text) => <a>{text}</a>
        },

    ];

    return (
        <Table columns={culumns} dataSource={competitionsData.competitions.map((item) => {
            return {
                key: item.id,
                nameCompetition: item.name,
                area: item.area.name,
                countryCode: item.area.countryCode,
                leagueCod: item.code,
                countryFlag: '#',
                startDate: "#startDate",
                andDate: "#andDate",
            }
        })}/>
    )
}


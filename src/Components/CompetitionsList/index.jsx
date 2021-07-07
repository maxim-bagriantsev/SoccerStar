import React, {useEffect, useState} from 'react';
import {Table, Input, Divider, Button, Space, Spin} from "antd";
import {culumns} from './common/tableColumns';
import {getCompetitions} from "../../api";

import 'antd/dist/antd.css';
import {getDataSource} from "./common/getDataSource";


const {Search} = Input;

export const CompetitionsList = () => {
    const [competitionsData, setCompetitionsData] = useState(null); //Тут будут данные с сервера
    const [isCompetitionsLoaded, setIsCompetitionsLoaded] = useState(false);// Это состояние для того, чтобы понять загрузились наши данные с сервера или нет

    useEffect(() => {
        getCompetitions().then((data) => {
            // кладем в стейт - сразу в виде  dataSource
            setCompetitionsData(getDataSource(data.competitions))
            setIsCompetitionsLoaded(true) // говорим, что данные загружены
        }).catch((err) => {
            console.log(err);
        });

    }, []);


    if (!isCompetitionsLoaded) { // если данные не загружены показываем спиннер
        return <Spin/>
    }

    // клик по кнопке поиска по имени
    const handleSearch = (searchVal)=>{
        // заглушка
        alert(searchVal);
    }

    return (
        <>
            <Space>
                <Search placeholder="Поиск по имени" enterButton onSearch={handleSearch}
                        style={{width: "300px"}}/>
            </Space>
            <Divider/>
            <Table bordered columns={culumns} dataSource={competitionsData}/>
        </>
    )
}


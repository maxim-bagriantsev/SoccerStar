import React from "react";
import {Layout, Menu} from 'antd';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {TeamsList} from "../TeamsList";
import {CalendarLeague} from "../CalendarLeague";
import {CalendarOneTeam} from "../CalendarOneTeam";
import {CompetitionsList} from "../CompetitionsList";
import {NavLink} from "react-router-dom";


import 'antd/dist/antd.css';
import './App.css'
import {HomePage} from "../HomePage";
import {HomeOutlined} from "@ant-design/icons";
import Text from "antd/es/typography/Text";

const {Header, Content, Footer} = Layout;

export const App = (props) => {
    return (
        <Router>
            <div className='main'>
                <Layout>
                    <Header style={{backgroundColor: '#001529'}}>
                        <Menu theme="dark" mode="horizontal">
                            <Menu.Item><NavLink style={{color: 'white'}} to='/'><HomeOutlined
                                style={{fontSize: '35px'}}/></NavLink></Menu.Item>
                            <Menu.Item><NavLink style={{color: 'white'}} to='/competitions'>Список турниров</NavLink></Menu.Item>
                            <Menu.Item><NavLink style={{color: 'white'}} to='/teamslist'>Список
                                команд</NavLink></Menu.Item>
                            <Menu.Item><NavLink style={{color: 'white'}} to='/calendarleague'>Календарь
                                лиги</NavLink></Menu.Item>
                            <Menu.Item><NavLink style={{color: 'white'}} to='/calendaroneteam'>Календарь одной
                                команды</NavLink></Menu.Item>
                        </Menu>
                    </Header>

                    <Content style={{margin: '10px 50px'}}>
                        <div className='content'>
                            <Route exact path='/' component={HomePage}/>
                            <Route path='/competitions' component={CompetitionsList}/>
                            <Route path='/teamslist' component={TeamsList}/>
                            <Route path='/calendarleague' component={CalendarLeague}/>
                            <Route path='/calendaroneteam' component={CalendarOneTeam}/>
                        </div>
                    </Content>
                    <Footer>
                        <p style={{textAlign: "center", color: "black", fontWeight: 500}}>
                            <Text style={{fontWeight: 700}}> Questions? </Text>
                            Drop me a line to <a style={{color: "blue"}}>maxim163rus@gmail.com</a> ,
                            Copyright © 2021
                        </p>
                    </Footer>
                </Layout>
            </div>
        </Router>
    )
}



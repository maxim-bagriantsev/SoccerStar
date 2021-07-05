import React from "react";
import './App.css'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import {TeamsList} from "../TeamsList";
import {CalendarLeague} from "../CalendarLeague";
import {Header} from '../Header';
import {CalendarOneTeam} from "../CalendarOneTeam";

import 'antd/dist/antd.css';
import './App.css';
import {Layout} from 'antd';
import {Content} from "antd/es/layout/layout";
import {CompetitionsList} from "../CompetitionsList";

export const App = (props) => {
    return (
        <Router>
            <div className='main'>
                <Layout>
                    <Header/>
                    <Content>
                        <div className='content'>
                            <Route path='/competitions' component={CompetitionsList}/>
                            <Route path='/teamslist' component={TeamsList}/>
                            <Route path='/calendarleague' component={CalendarLeague}/>
                            <Route path='/calendaroneteam' component={CalendarOneTeam}/>
                        </div>
                    </Content>
                    {/*<Footer>Footer</Footer>*/}
                </Layout>
            </div>
        </Router>
    )
}



import React from "react";
import './App.css'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import PageOne from "../PageOne/PageOne";
import PageTwo from "../PageTwo/PageTwo";
import PageFree from "../PageFree/PageFree";
import Header from "../Header/Header";


const App = () => {
    return (
        <Router>
            <div className='main'>
                <Header/>
                <div className='content'>
                    <Route path='/pageone' component={PageOne}/>
                    <Route path='/pagetwo' component={PageTwo}/>
                    <Route path='/pagefree' component={PageFree}/>
                </div>
            </div>
        </Router>
    )
}

export default App;
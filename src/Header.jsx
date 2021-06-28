import React from 'react'
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageFree from "./PageFree";

import {BrowserRouter as Router, Route} from "react-router-dom";

const Header = () => {

    return (
        <Router>
            <div>
                <PageOne/>
                <PageTwo/>
                <PageFree/>
            </div>
        </Router>
    )
}

export default Header;
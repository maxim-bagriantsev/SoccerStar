import React from 'react'
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageFree from "./PageFree";

const Header =() => {

    return (
        <div>
            <PageOne/>
            <PageTwo/>
            <PageFree/>
        </div>
        )
}

export default Header;
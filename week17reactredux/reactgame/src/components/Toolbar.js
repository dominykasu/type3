import React from 'react';
import {Link, useLocation} from "react-router-dom";
const Toolbar = () => {
    let location = useLocation()
    // console.log(location.pathname)

    return (
        <div>
            { location.pathname === "/main" && <Link to="/shop">shop</Link> }
            { location.pathname === "/shop" &&  <Link to="/main">main</Link> }
            <Link to="/arena">arena</Link>
        </div>
    );
};

export default Toolbar;
import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {


    return (
        <div className="toolbar">
            <Link to="/register">Register</Link>
            <Link to="/login">Log In</Link>
            <Link to="/info">Auctions</Link>
        </div>
    );
};

export default Header;

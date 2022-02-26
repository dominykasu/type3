import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {


    return (
        <div className="toolbar">
            <Link to="/register">Register</Link>
            <Link to="/login">Log In</Link>
            <Link to="/info">Auctions</Link>
            <Link to="/myauctions">My Auctions</Link>
            <Link to="/mybids">My Bids</Link>

        </div>
    );
};

export default Header;

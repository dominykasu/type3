import React from 'react';
import StarRating from "./StarRating";
import {Link} from "react-router-dom"
const Profile = () => {
    return (
        <div className="userProfile d-flex f-column">
            <div>
                <img className="profileImage" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt=""/>
            </div>
            <div>

            </div>

            <div className="navigation">
                <Link to="create-review">Create Review</Link>
                <Link to="all-reviews">Show All Reviews</Link>
            </div>
        </div>
    );
};

export default Profile;
import React, {useEffect, useState} from 'react';
import http from "../plugins/http";

const UserAuctions = () => {

    const [getAuctions, setAuctions] = useState([])

    useEffect(() => {
        http.get("userAuction").then(res => {
            console.log(res)
            setAuctions(res.auction)
        })

    }, [])

    return (
        <div>
            <h1>User Auctions</h1>
            {getAuctions && getAuctions.map((x,i)=><div  className="d-flex ml20" key={i}>
                <div>
                <img className="postsImg" src={x.image}/></div>
                    <div><h3 className="ml20 m-top10">{x.title}</h3>
                <h4 className="ml20 m-top">Price: {x.startPrice}</h4>
                <h4 className="ml20 m-top">Posted By: {x.user}</h4></div>
            </div>
            )}

        </div>
    );
};

export default UserAuctions;
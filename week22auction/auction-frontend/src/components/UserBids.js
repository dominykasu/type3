import React, {useEffect, useState} from 'react';
import http from "../plugins/http";

const UserBids = () => {

    const [getBids, setBids] = useState([])

    useEffect(() => {
        http.get("userBids").then(res => {
            console.log(res)
            setBids(res.auction)
        })

    }, [])

    return (
        <div>
            <h1>User Bids</h1>
            {getBids && getBids.map((x,i)=><div className="d-flex ml20" key={i}>
                <div>
                    <img className="postsImg" src={x.image}/></div>
                <div><h3 className="m-top10 ml20">{x.title}</h3>
                    <h4 className="m-top10 ml20">Price: {x.startPrice}</h4>
                    <h4 className="m-top10 ml20">Posted By: {x.user}</h4></div>
                </div>
            )}

        </div>
    );
};

export default UserBids;
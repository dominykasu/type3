import React from 'react';

const SingleBid = ({bid}) => {
    return (
        <div className="d-flex p20">
            <div className="grow1 ml20">
                <img src={bid.userPhoto} className="bidPhoto" alt=""/>
            </div>
            <div className="grow5 m-top10">
            <h4 className=" m-top10">{bid.user}</h4>
                <h4 className=" m-top10">{bid.bid}</h4>
                <div>{new Date(bid.time).toLocaleString("lt-Lt")}</div>
            </div>
        </div>
    );
};

export default SingleBid;
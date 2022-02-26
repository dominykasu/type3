import React, {useEffect} from 'react';
import http from "../plugins/http";
import {useState} from "react";
import {useParams} from "react-router-dom";
import SingleAuction from "../components/SingleAuction";
import PlaceBid from "../components/placeBid";
import SingleBid from "../components/SingleBid";
const SingleAuctionPage = () => {

    const {id} = useParams()
    const [getAuction,setAuction] = useState()

    useEffect(() => {
        http.get("singleAuction/"+id).then(res => {
            setAuction(res.auction)
        })

    }, [])
    console.log(getAuction)
    return (
        <div>

            {getAuction && <div>
                <div className="d-flex ml20 m-top20">
                    <div>
            <img className="postsImg" src={getAuction.image}/></div>
                    <div> <h4 className="m-top10 ml20" >{getAuction.title}</h4>
            <h5 className="m-top ml20">{getAuction.startPrice}</h5>
            <h5 className="m-top ml20">{getAuction.user}</h5>
            <h5 className="m-top ml20">{getAuction.endTime}</h5></div>
                </div>
                <PlaceBid setAuction={setAuction} getAucti={getAuction} bidId={id}/>
                <div>
                    {getAuction.bids.map((x,i) => <SingleBid bid={x}  key={i}/> )}
                </div>
            </div>}
        </div>
    );
};

export default SingleAuctionPage;
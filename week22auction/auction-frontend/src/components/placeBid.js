import React, {useEffect, useState} from 'react';
import {useRef} from "react";
import http from "../plugins/http";
const PlaceBid = ({bidId, setAuction, getAucti}) => {

    const bid = useRef()
const [getUser,setUser] = useState()


    useEffect(() => {
        http.get("info").then(res => {

            setUser(res.info)
        })

    }, [])

    function placeBid(){

        const userBid = {
            bid: bid.current.value,
            bidId: bidId
        }
if(getUser.money >= getAucti.startPrice && userBid.bid <=getUser.money) {
        http.post (userBid, "postBid" ).then(res=>{
            console.log(res)
            if(res.success){
setAuction(res.bids)
            }
})
} else {
    console.log("not enough money or bid is too big for you")
}
    }

    return (
        <div>
            <input type="number" ref={bid} placeholder="place bid"/>
            <button onClick={placeBid}>Place Bid</button>
        </div>
    );
};

export default PlaceBid;
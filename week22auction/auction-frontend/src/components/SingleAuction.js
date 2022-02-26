import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import http from "../plugins/http";
const SingleAuction = ({getAuctions}) => {

    const [getTimeLeft, setTimeLeft] = useState({})



useEffect(() => {
    const timer = setTimeout(()=>{
        setTimeLeft(caclulateTimeLeft())
    },1000);

    return () => clearTimeout(timer);
},)


const caclulateTimeLeft = () => {

        const date = new Date().getTime()
        const timer = getAuctions.endTime - date

    let timeleft = {}

    if(timer>0){
        timeleft = {
            days: Math.floor(timer / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timer % (1000 * 60)) / 1000)

        }



        if(timer<0) {
            timeleft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }

            let test = getAuctions.bids
            let max = Math.max(...test.map(o => o.bid))
            let winners = test.filter(x => Number(x.bid) === max)

            if(winners.length > 0){
                const winner = {
                    winner:winners,

                }
                http.post (winner, "winner" ).then(res=>{
                    console.log(res)

                })



            }
            clearTimeout(timer)
            }



    }

       return timeleft
    }






    return (
        <div>
            <div className="">



                    <div className="m-20">
                        <Link to={`/auction/${getAuctions._id}`}>
                            <div className="d-flex">
                                <div>
                    <img className="postsImg" src={getAuctions.image}/>
                                </div>
                                <div className="p20 ">
                    <h4 className="m-top">{getAuctions.title}</h4>
                    <h3 className="m-top">Price: {getAuctions.startPrice}</h3>
                    <h3 className="m-top">Posted By: {getAuctions.user}</h3>
                            <h4 className="m-top">Date Posted: {new Date(getAuctions.startTime).toLocaleString()}</h4>

                            <h4 className="m-top">Date Expires: {new Date(getAuctions.endTime).toLocaleString()}</h4>
                            <h3 className="m-top">TIME LEFT - {getTimeLeft.days} days, {getTimeLeft.hours} hours, {getTimeLeft.minutes} minutes, {getTimeLeft.seconds} seconds</h3>
                                </div>
                            </div>
                        </Link>
                </div>



            </div>
        </div>
    );
};

export default SingleAuction;
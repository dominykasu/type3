import React, {useEffect, useRef, useState} from 'react';
import http from "../plugins/http";
import AuctionPage from "./AuctionPage";

const ProfilePage = () => {

    const [getImage, setImage] = useState("")
    const [getEmail, setEmail] = useState("")
    const [getAuctions, setAuctions] = useState([])



    const [getSelect, setSelect] = useState(30)
    const [items, setItems] = useState([
        {
            label: "30 minutes",
            value: 30
        },
        { label: "12 hours", value: 12 },
        { label: "1 day", value: 24 },
        { label: "30 days", value: 301 }
    ])
    const select = useRef()

    const imageRef = useRef()
    const titleRef = useRef()
    const startPriceRef = useRef()



    function setAuction(){

        const selectField = getSelect

        let timeEnd = Date.now()
        let timeStart = Date.now()
        console.log(timeEnd, timeStart)
        if(Number(selectField) === 30){

timeEnd += 1800000
            console.log(timeEnd)


        }
        if(Number(selectField) === 12){
            timeEnd += 43200000

        }
        if(Number(selectField)=== 24){
            timeEnd += 86400000

        }
        if(Number(selectField)=== 301){
            timeEnd += 2592000000

        }
        const postAuction = {
            image: imageRef.current.value,
            title: titleRef.current.value,
            user: getEmail,
            // timeCreated: new Date().toLocaleTimeString()
            startPrice: Number(startPriceRef.current.value),
            startTime: timeStart,
            endTime: timeEnd


        }

        console.log(postAuction)

        http.post(postAuction, "post").then(res => {
            console.log(res)
            if(res.success){
                setAuctions(res.auctions)
            }
            // console.log(res)

        })

    }

    useEffect(() => {
        http.get("info").then(res => {
            setImage(res.info.image)
            setEmail(res.info.email)

            console.log(res)
        })

    }, [])

    useEffect(() => {
        http.get("getAuctions").then(res => {
            setAuctions(res.auctions)


            console.log(res)
        })

    }, [])

    return (
        <div>
            <div className="d-flex ">
                <div className="userCard">
            <img src={getImage} alt=""/>
            <h2>{getEmail}</h2>
                </div>
<div>

</div>
            </div>
            <input type="text" ref={imageRef} placeholder="image"/>
            <input type="text" ref={titleRef}  placeholder="title"/>
            <input type="number" ref={startPriceRef}  placeholder="start price"/>


            <select onChange={e => setSelect(e.currentTarget.value)}>
                {items.map(({ label, value }) => (
                    <option  ref={select} key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>

            <button onClick={setAuction}>Post</button>

            <AuctionPage getAuctions={getAuctions}/>
        </div>
    );
};

export default ProfilePage;
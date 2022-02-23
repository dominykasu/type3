import React, {useEffect, useRef, useState} from 'react';
import http from "../plugins/http";
import PostsPage from "./PostsPage";
// import UploadPage from "./UploadPage";
const ProfilePage = () => {

    const [getImage, setImage] = useState("")
    const [getEmail, setEmail] = useState("")
    const [getAuctions, setAuctions] = useState([])

    const imageRef = useRef()
    const titleRef = useRef()
    const startPriceRef = useRef()
    const durationRef = useRef()

    function setPost(){

        const postAuction = {
            image: imageRef.current.value,
            title: titleRef.current.value,
            user: getEmail,
            // timeCreated: new Date().toLocaleTimeString()
            startPrice: startPriceRef.current.value,
            endTime: durationRef.current.value

        }

        // console.log(postAuction)

        http.post(postAuction, "post").then(res => {
            if(res.success){
                setAuctions(res.auctions)
                // console.log(res.auctions)
            }
            console.log(res)

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
            <img src={getImage} alt=""/>
            <h2>{getEmail}</h2>
            <input type="text" ref={imageRef} placeholder="image"/>
            <input type="text" ref={titleRef}  placeholder="title"/>
            <input type="text" ref={startPriceRef}  placeholder="start price"/>
            <input type="text" ref={durationRef}  placeholder="duration"/>

            <button onClick={setPost}>Post</button>
            {/*<UploadPage/>*/}
            <PostsPage getAuctions={getAuctions}/>
        </div>
    );
};

export default ProfilePage;
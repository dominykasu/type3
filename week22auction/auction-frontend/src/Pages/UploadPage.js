// import React, {useRef} from 'react';
// import {useNavigate} from "react-router-dom";
// import http from "../plugins/http";
//
// const UploadPage = () => {
//     const linkRef = useRef()
//
//     const nav = useNavigate()
//
//     function upload() {
//         const user = {
//             link: linkRef.current.value,
//         }
//
//         http.post(user, "update").then(res => {
//             console.log(res)
//             if(res.success) {
//                 nav('/info')
//             }
//         })
//     }
//
//     return (
//         <div>
//             <input type="text" ref={linkRef} placeholder="link"/>
//
//             <button onClick={upload}>Upload Auction</button>
//         </div>
//     );
// };
//
// export default UploadPage;
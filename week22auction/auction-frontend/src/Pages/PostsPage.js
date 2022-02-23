import React from 'react';

const PostsPage = ({getAuctions}) => {
    return (
        <div>
            <h1>Auctions</h1>
            <div className="d-flex">
            {getAuctions.map((x, index)=><div className="m-20" key={index}>
                <img className="postsImg" src={x.image}/>
                <h2>{x.title}</h2>
                <h3>{x.startPrice}</h3>
                <h3>{x.user}</h3>
                <h4>{x.endTime}</h4>
            </div>)}
            </div>
        </div>
    );
};

export default PostsPage;
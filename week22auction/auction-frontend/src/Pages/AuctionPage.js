import React from 'react';
import SingleAuction from "../components/SingleAuction";

const AuctionPage = ({getAuctions}) => {




    return (
        <div>
            <h1>Auctions</h1>

            {getAuctions.map((x,i) => <SingleAuction getAuctions={x} key={i}/> )}

        </div>
    );
};

export default AuctionPage;
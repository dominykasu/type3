import React from 'react';

const Toolbar = ({getUser}) => {

    console.log(getUser)
    return (
        <div>
            {getUser && <div className="d-flex sp-ev">
<h1>{getUser.email}</h1>
            <h1>{getUser.money}</h1></div>}
        </div>
    );
};

export default Toolbar;
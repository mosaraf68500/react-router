import React from 'react';
import { useLoaderData } from 'react-router';

const ShowDetail = () => {
    const userDetails=useLoaderData();
    const {name, email, id}=userDetails
    
    return (
        <div>
            {/* <h1>show details data hare</h1> */}
            <p>{name}</p>
            <p>{email}</p>
            <p>{id}</p>
        </div>
    );
};

export default ShowDetail;
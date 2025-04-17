import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const { id,name, email, phone}=user;
    return (
        <div className='border-2 border-amber-300 rounded-md p-4  m-2'> 
            <h3> Name:{name}</h3>
            <p>Name:{email} </p>
            <p>Phone:{phone} </p>
            <Link to={`/users/${id}`}> show details</Link>
        </div>
    );
};

export default User;
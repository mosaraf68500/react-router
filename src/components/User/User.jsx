import React from 'react';

const User = ({user}) => {
    const {name, email, phone}=user;
    return (
        <div className='border-2 border-amber-300 rounded-md p-4  m-2'> 
            <h3> Name:{name}</h3>
            <p>Name:{email} </p>
            <p>Phone:{phone} </p>
        </div>
    );
};

export default User;
import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const users=useLoaderData();
    // console.log(data);

    return (
        <div>
            {/* <h1>users data</h1> */}
            {
                users.map(user =><User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Users;
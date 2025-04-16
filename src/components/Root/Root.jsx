import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Mobiles from '../Mobiles/Mobiles';

const Root = () => {
    return (
        
        <div>

        <header>
            <Header></Header>
        </header>
        <Outlet>
            <Mobiles></Mobiles>
        </Outlet>

        </div>
    );
};

export default Root;
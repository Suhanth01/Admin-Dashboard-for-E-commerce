import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Shared/Sidebar';

const Main = () => {
    return (
        <div>
            <div className='flex flex-row'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
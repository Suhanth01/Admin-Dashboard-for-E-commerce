import React from 'react';
import MainChart from '../Shared/MainChart';
import SecondChart from '../Shared/SecondChart';
import Order from './Report/Order';
import Reviews from './Report/Reviews';
import Sale from './Report/Sale';
import Tax from './Report/Tax';
import Table from './InvioceTable/Table';
import Progress from './Progress/Progress';

const DashboardOne = () => {
    return (
        <div className='w-full my-2'>
            <div className='grid lg:grid-cols-4 grid-cols-1 lg:pl-0 pl-5 gap-x-4 gap-y-2'>
                <div className='bg-gray-200 h-36 rounded-md hover:bg-slate-300 duration-300'>
                    <Sale></Sale>
                </div>
                <div className='bg-gray-200 h-36  rounded-md hover:bg-slate-300 duration-300'>
                    <Order></Order>
                </div>
                <div className='bg-gray-200 h-36  rounded-md hover:bg-slate-300 duration-300'>
                    <Reviews></Reviews>
                </div>
                <div className='bg-gray-200 h-36  rounded-md hover:bg-slate-300 duration-300'>
                    <Tax></Tax>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col lg:pl-0 pl-5 gap-x-4 mt-4 gap-y-2'>
                <div className='h-80 bg-gray-200 rounded-lg w-full'>
                    <MainChart></MainChart>
                </div>
                <div className='h-80 bg-gray-200 rounded-lg lg:w-2/5 w-full'>
                    <SecondChart></SecondChart>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col lg:pl-0 pl-5 gap-y-2 mt-4 gap-x-4'>
                <div className='h-96 bg-gray-200 rounded-lg w-full'>
                    <Table></Table>
                </div>
                <div className='h-96 bg-gray-200 rounded-lg lg:w-2/5 w-full'>
                    <Progress></Progress>
                </div>
            </div>
        </div>
    );
};

export default DashboardOne;
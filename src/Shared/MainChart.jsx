import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MainChart = () => {
    const data = [
        {
            Month: 'January',
            Earnings: 2000,
            pv: 2400,
            amt: 2400,
        },
        {
            Month: 'February',
            Earnings: 6500,
            pv: 1398,
            amt: 2210,
        },
        {
            Month: 'March',
            Earnings: 3000,
            pv: 9800,
            amt: 2290,
        },
        {
            Month: 'April',
            Earnings: 1800,
            pv: 3908,
            amt: 2000,
        },
        {
            Month: 'May',
            Earnings: 4500,
            pv: 4800,
            amt: 2181,
        },
        {
            Month: 'June',
            Earnings: 6000,
            pv: 3800,
            amt: 2500,
        },
        {
            Month: 'July',
            Earnings: 2000,
            pv: 4300,
            amt: 2100,
        },
        {
            Month: 'August',
            Earnings: 7100,
            pv: 4300,
            amt: 2100,
        },
        {
            Month: 'September',
            Earnings: 3500,
            pv: 4300,
            amt: 2100,
        },
        {
            Month: 'October',
            Earnings: 7100,
            pv: 4300,
            amt: 2100,
        },
        {
            Month: 'November',
            Earnings: 1800,
            pv: 4300,
            amt: 2100,
        },
        {
            Month: 'December',
            Earnings: 7300,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <div className='flex justify-between px-2 my-2'>
                <div>
                    <h1 className='uppercase font-semibold'>Earnings</h1>
                    <p className='text-xs text-gray-500'>Monthly</p>
                </div>
                <div className='flex gap-x-4'>
                    <div>
                        <p className='uppercase text-sm font-semibold'>Monthly</p>
                        <p className='text-xs text-gray-500'>Rs. 4356.0</p>
                    </div>
                    <div>
                        <p className='uppercase text-sm font-semibold'>Summary</p>
                        <p className='text-xs text-gray-500'>Rs. 4356.0</p>
                    </div>
                    <div>
                        <p className='uppercase text-sm font-semibold'>Cashflow</p>
                        <p className='text-xs text-gray-500'>Rs. 4356.0</p>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', height: 260 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="1 4" />
                        <XAxis dataKey="Month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Earnings" stroke="#B6CD73E8" fill="#CDE096" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MainChart;
import React, { useEffect, useState } from 'react';
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {GiCheckMark, GiDuration} from 'react-icons/gi'
import { FiXCircle } from 'react-icons/fi';
const Order = () => {
    const [items, SetItems] = useState()
    useEffect(() => {
        fetch('order.json')
            .then(res => res.json())
            .then(data => SetItems(data))
    }, [])
    return (
        <div className="container p-2 mx-auto sm:p-4 bg-slate-100">
            <div className="overflow-x-auto">
                <div className='grid grid-cols-4 gap-5 mb-16'>
                    <div className='flex gap-x-3 items-center w-4/5 py-2  bg-green-700 text-white justify-center rounded-lg'>
                        <HiOutlineShoppingBag className='text-3xl'></HiOutlineShoppingBag>
                        <p className='text-2xl'>Orders</p>
                        <p className='bg-white text-gray-800 rounded-full w-5 h-5 flex justify-center items-center text-xl'>5</p>
                    </div>
                    <div className='flex gap-x-3 items-center w-4/5 py-2  bg-blue-700 text-white justify-center rounded-lg'>
                        <GiDuration className='text-3xl'></GiDuration>
                        <p className='text-2xl'>Processing</p>
                        <p className='bg-white text-gray-800 rounded-full w-5 h-5 flex justify-center items-center text-xl'>5</p>
                    </div>
                    <div className='flex gap-x-3 items-center w-4/5 py-2  bg-yellow-600 text-white justify-center rounded-lg'>
                        <GiCheckMark className='text-3xl'></GiCheckMark>
                        <p className='text-2xl'>Completed</p>
                        <p className='bg-white text-gray-800 rounded-full w-5 h-5 flex justify-center items-center text-xl'>5</p>
                    </div>
                    <div className='flex gap-x-3 items-center w-4/5 py-2  bg-red-700 text-white justify-center rounded-lg'>
                        <FiXCircle className='text-3xl'></FiXCircle>
                        <p className='text-2xl'>Canceled</p>
                        <p className='bg-white text-gray-800 rounded-full w-5 h-5 flex justify-center items-center text-xl'>5</p>
                    </div>
                  
                </div>
                <div className='flex gap-x-16 mt-4'>
                    <p className='text-green-600 text-xl flex gap-x-1 items-baseline'>All <span className='text-xs py-1 text-white w-5 h-5 rounded-full px-4 bg-green-500 flex justify-center items-center'>5</span></p>
                    <p className='text-gray-600 text-xl flex gap-x-1 items-baseline'>Accepted<span className='text-xs py-1 text-white w-5 h-5 rounded-full px-4 bg-gray-500 flex justify-center items-center'>5</span></p>
                    <p className='text-gray-600 text-xl flex gap-x-1 items-baseline'>Rejected <span className='text-xs py-1 text-white w-5 h-5 rounded-full px-4 bg-gray-500 flex justify-center items-center'>5</span></p>
                </div>
                <div className='flex justify-between mt-4 items-center'>
                    <p className='text-gray-600'>showing 5-10 results</p>
                    <div className='text-center'>
                        <input type="text" className='w-40 bg-gray-400 bg-opacity-60 rounded py-1 px-4' placeholder='Search here' />
                        <button className='btn-primary btn btn-sm ml-2 text-white'>SEARCH</button>
                    </div>
                </div>
                <table className="w-full mx-auto text-xs border-spacing-2 border-separate">

                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className='' />
                    </colgroup>

                    <thead className="text-gray-600">
                        <tr className="text-left bg-transparent text-lg font-normal">
                            <th className="p-3"><div className='flex items-center'><p>Invoice <br /> details</p></div></th>
                            <th className="p-3"><div className='flex items-center'><p>Status</p></div></th>
                            <th className="p-3"><div className='flex items-center'><p>User Details</p></div></th>
                            <th className="p-3"><div className='flex items-center'><p>Item details</p></div></th>
                            <th className="p-3 "><div className='flex items-center'><p>Amount</p></div></th>
                        </tr>
                    </thead>
                    <tbody className='rounded-xl'>
                        {
                            items?.map(item => <tr key={item.id} className="border-b border-gray-200 text-gray-600 bg-red-50">
                                <td className="p-3">
                                    <p className=''>{item.invoice_details}</p>
                                </td>

                                <td className="p-3">
                                    {
                                        item.status === 'Accepted' && <p className=' text-green-700 bg-green-200 rounded py-1 px-2'>{item.status}</p>
                                    }
                                    {
                                        item.status === 'rejected' && <p className=' text-red-700 bg-red-200 rounded py-1 px-2'>{item.status}</p>
                                    }
                                </td>
                                <td className="p-3 flex flex-col">
                                    <p className='text-md'>{item.user_name}</p>
                                    <p className='text-xs'>{item.user_email}</p>
                                </td>
                                <td className="p-3">
                                    <p className='text-sm'>{item.item_details}</p>
                                </td>
                                <td className="p-3">
                                    <p className='text-md font-semibold'>RS {item.price}</p>
                                    <p className='text-xs'>RS 300+15% (GST)</p>
                                </td>

                                <td className="p-3">
                                    <div className='flex gap-x-2'>

                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Order;
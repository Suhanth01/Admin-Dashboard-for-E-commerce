import React, { useState } from 'react';

const Table = () => {
    const [details, setDetails] = useState()
    fetch('invoice.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    return (
        <div className="container p-2 mx-auto sm:p-4 ">
            <h2 className="mb-4 text-2xl font-semibold leading-tight uppercase text-gray-600">Today's Order</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className='w-24' />
                    </colgroup>
                    <thead className="text-gray-600">
                        <tr className="text-left">
                            <th className="p-3">Order Number</th>
                            <th className="p-3">User details</th>
                            <th className="p-3">Order type</th>
                            <th className="p-3">Amount Rs</th>
                            <th className="p-3 text-center">Payment type</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details?.map(detail => <tr key={detail.index} className="border-b border-opacity-20  border-gray-700 text-gray-600">
                                <td className="p-3">
                                    <p className='font-semibold'>{detail.index}</p>
                                </td>
                                <td className="p-3">
                                    <p>{detail.client}</p>
                                </td>
                                <td className="p-3">
                                    <p>{detail.type}</p>
                                    <p className=" text-gray-400">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>{detail.amount}</p>
                                    <p className=" text-gray-400">Tuesday</p>
                                </td>
                                <td className="p-3 text-center">
                                    <p>{detail.payment}</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-neutral text-white">
                                        <span>{detail.status}</span>
                                    </span>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Table;
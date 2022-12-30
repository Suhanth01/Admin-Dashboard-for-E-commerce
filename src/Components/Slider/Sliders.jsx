import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const Sliders = () => {
    const [items, SetItems] = useState()
    useEffect(() => {
        fetch('Slider.json')
            .then(res => res.json())
            .then(data => SetItems(data))
    }, [])
    return (
        <div className="container p-2 mx-auto sm:p-4 bg-slate-100">
            <h2 className="mb-4 text-xl font-semibold leading-tight uppercase text-gray-600 ml-14 flex items-center gap-x-1">ALL SLIDERS <AiFillCaretDown></AiFillCaretDown></h2>
            <div className="overflow-x-auto">
                <p className='uppercase font-semibold flex items-center ml-14'>Entries <AiFillCaretDown></AiFillCaretDown></p>
                <table className="w-11/12 mx-auto text-xs my-5">

                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className='w-20' />
                    </colgroup>

                    <thead className="text-gray-600">
                        <tr className="text-left bg-transparent">
                            <th className="p-3"><div className='flex items-center'><p>#1</p><AiFillCaretDown></AiFillCaretDown></div></th>
                            <th className="p-3"><div className='flex items-center'><p>Image</p><AiFillCaretDown></AiFillCaretDown></div></th>
                            <th className="p-3"><div className='flex items-center'><p>Title</p><AiFillCaretDown></AiFillCaretDown></div></th>
                            <th className="p-3"><div className='flex items-center'><p>Category</p><AiFillCaretDown></AiFillCaretDown></div></th>
                            <th className="p-3"><div className='flex items-center'><p>Items</p><AiFillCaretDown></AiFillCaretDown></div></th>
                            <th className="p-3"><div className='flex items-center'><p>Description</p><AiFillCaretDown></AiFillCaretDown></div></th>
                            <th className="p-3 "><div className='flex items-center'><p>Action</p><AiFillCaretDown></AiFillCaretDown></div></th>
                        </tr>
                    </thead>
                    <tbody className='rounded-xl'>
                        {
                            items?.map(item => <tr key={item.id} className="border-b border-gray-200 text-gray-600 bg-red-50">
                                <td className="p-3">
                                    <p className='font-semibold'>{item.id}</p>
                                </td>
                                <td className="p-3">
                                    <img src={item.image} alt="" className='w-16 h-16 rounded-lg' />
                                </td>
                                <td className="p-3">
                                    <p className='text-lg'>{item.title}</p>
                                </td>
                                <td className="p-3">
                                    <p>{item.category}</p>
                                    <p className=" text-gray-400">Tuesday</p>
                                </td>
                                <td className="p-3">
                                    <p>{item.item}</p>
                                </td>
                                <td className="p-3">
                                    <p>{item.description}</p>
                                </td>
                                <td className="p-3">
                                    <div className='flex gap-x-2'>
                                        <button className='bg-green-800 bg-opacity-50 rounded-md text-white px-2 font-xs'>Edit</button> 
                                        <button className='bg-red-800 font-xs bg-opacity-60 rounded-md text-white  px-2'>Delete</button> 
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

export default Sliders;
import React, { useEffect, useState } from 'react';
import { AiFillCaretDown, AiFillEdit, AiFillPlusCircle } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im'
const Item = () => {
    const [items, SetItems] = useState()
    useEffect(() => {
        fetch('item.json')
            .then(res => res.json())
            .then(data => SetItems(data))
    }, [])
    return (
        <div className="container p-2 mx-auto sm:p-4 bg-slate-100">
            <div className='flex justify-between items-center'>
                <h2 className="mb-4 text-2xl font-semibold leading-tight uppercase text-gray-600 ml-14 flex items-center gap-x-1">Items</h2>
                <div className='bg-gray-200 p-2 rounded-md shadow-lg shadow-gray-300 flex gap-x-2 items-center'>
                    <p>Add Product</p>
                    <AiFillPlusCircle className='text-green-500 w-10 h-10'></AiFillPlusCircle>
                </div>

            </div>
            <div className='text-center'>
                <input type="text" className='w-72 bg-gray-400 bg-opacity-60 rounded py-1 px-4' placeholder='Search here' />
                <button className='btn-primary btn btn-sm ml-2 text-white'>SEARCH</button>
            </div>
            <div className="overflow-x-auto">
                <p className='uppercase font-semibold flex items-center ml-14'>Entries <AiFillCaretDown></AiFillCaretDown></p>
                <table className="w-full mx-auto text-xs my-5 border-spacing-2 border-separate">

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
                        <tr className="text-left bg-transparent">
                            <th className="p-3"><div className='flex items-center'><p>Name</p><AiFillCaretDown></AiFillCaretDown></div></th>
                            <th className="p-3"><div className='flex items-center'><p>Category</p><AiFillCaretDown></AiFillCaretDown></div></th>
                            <th className="p-3"><div className='flex items-center'><p>stock</p><AiFillCaretDown></AiFillCaretDown></div></th>
                            <th className="p-3"><div className='flex items-center'><p>Restock</p><AiFillCaretDown></AiFillCaretDown></div></th>

                            <th className="p-3 "><div className='flex items-center'><p>Action</p><AiFillCaretDown></AiFillCaretDown></div></th>
                        </tr>
                    </thead>
                    <tbody className='rounded-xl'>
                        {
                            items?.map(item => <tr key={item.id} className="border-b border-gray-200 text-gray-600 bg-red-50">
                                <td className="p-3">
                                    <p className='font-semibold'>{item.item}</p>
                                </td>

                                <td className="p-3">
                                    <p>{item.category}</p>
                                </td>
                                <td className="p-3">
                                    <p>{item.stock}</p>
                                </td>
                                <td className="p-3">
                                    <p>{item.restock}</p>
                                </td>
                                <td className="p-3">
                                    <button className='bg-green-800 bg-opacity-50 rounded-md text-white px-2 font-xs'>Active</button>
                                </td>

                                <td className="p-3">
                                    <div className='flex gap-x-2'>
                                        <BsCheckLg className='text-green-500 w-6 h-6 p-1 bg-gray-300 rounded-full'></BsCheckLg>
                                        <ImCross className='text-red-500 w-6 h-6 rounded-full p-1 bg-gray-300'></ImCross>
                                        <AiFillEdit className='text-amber-500 w-6 h-6  rounded-full p-1 bg-gray-300'></AiFillEdit>
                                        <BiShoppingBag className='text-primary w-6 h-6  rounded-full p-1 bg-gray-300'></BiShoppingBag>
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

export default Item;
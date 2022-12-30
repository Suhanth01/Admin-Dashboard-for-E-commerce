import React from 'react';
import { useState } from 'react';
import { AiFillCaretDown, AiFillSafetyCertificate, AiOutlinePlus } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import { BiSliderAlt } from 'react-icons/bi'
import { CgMenuGridR } from 'react-icons/cg';
import { FaTachometerAlt, FaWalking } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { RiChatUploadFill } from 'react-icons/ri';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import logo from '../assets/logo/Black & White Minimalist Business Logo.png'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={open === true ? 'lg:w-56 w-72 mx-4 min-h-screen mt-5 relative duration-300' : 'w-24 mx-4 min-h-screen mt-5 relative duration-300'}>
      <div className="menu p- w-28 bg-base-100 flex flex-col gap-y-2 text-base-content ">
        <div onClick={() => setOpen(!open)} className=' block'>
          {
            open ? <BsToggleOn className='w-24 h-9 text-gray-500 font-bold'></BsToggleOn> :
              <BsToggleOff className='w-24 h-9 text-gray-500 font-bold'></BsToggleOff>
          }
        </div>
        <img src={logo} alt="" />
        <p className='text-xs text-gray-500 text text-center'>Admin panel</p>
        <div className='flex flex-col gap-y-5 '>

          <NavLink to='/' className={({ isActive }) => isActive ? 'flex flex-row justify-between gap-x-4 items-center scale-125  ' : 'flex flex-row justify-between gap-x-4 items-center'}>
            <FaTachometerAlt className='w-8 h-10 mx-auto text-gray-700'></FaTachometerAlt>
            <p className={open ? 'block font-semibold text-gray-600 cursor-pointer w-20' : 'hidden font-semibold text-gray-600 w-20'}>Dashboard</p>
          </NavLink>

          <NavLink to='/slider' className={({ isActive }) => isActive ? 'flex flex-row justify-between gap-x-4 items-center scale-125  ' : 'flex flex-row justify-between gap-x-4 items-center'}>
            <BiSliderAlt className='w-8 h-10 mx-auto text-gray-700'></BiSliderAlt>
            <p className={open ? 'block font-semibold text-gray-600 cursor-pointer w-20' : 'hidden font-semibold text-gray-600 w-20'}>Sliders</p>
          </NavLink>

          <NavLink to='/categories' className={({ isActive }) => isActive ? 'flex flex-row justify-between gap-x-4 items-center scale-125  ' : 'flex flex-row justify-between gap-x-4 items-center'}>
            <CgMenuGridR className='w-8 h-10 mx-auto font-light text-gray-700'></CgMenuGridR>
            {/* <p className={open ? 'block font-semibold text-gray-600 cursor-pointer w-20' : 'hidden font-semibold text-gray-600 w-20'}>Categories</p> */}
            <div className="dropdown">
              <label tabIndex={0} className={open ? 'block font-semibold text-gray-600 cursor-pointer w-20' : 'hidden font-semibold text-gray-600 w-20 flex flex-row items-center'}>Categories <AiFillCaretDown></AiFillCaretDown></label>
              <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-base-100 rounded w-32">
                <NavLink to='/categories' className={({ isActive }) => isActive ? 'Text-gray-400 bg-gray-300' : 'text-gray-900'}><li>Categories</li></NavLink>
                <NavLink to='/subCategories' className={({ isActive }) => isActive ? 'Text-gray-400 bg-gray-300' : 'text-gray-900'}><li>Sub categories</li></NavLink>
              </ul>
            </div>
          </NavLink>
          <NavLink to='/items' className={({ isActive }) => isActive ? 'flex flex-row justify-between gap-x-4 items-center scale-125  ' : 'flex flex-row justify-between gap-x-4 items-center'}>
            <AiOutlinePlus className='w-8 h-10 mx-auto font-light text-gray-700'></AiOutlinePlus>
            <p className={open ? 'block font-semibold text-gray-600 cursor-pointer  w-20' : 'hidden font-semibold text-gray-600 w-20'}>Items</p>
          </NavLink>
          <NavLink to='/delivery' className={({ isActive }) => isActive ? 'flex flex-row justify-between gap-x-4 items-center scale-125  ' : 'flex flex-row justify-between gap-x-4 items-center'}>
            <FaWalking className='w-8 h-10 mx-auto font-light text-gray-700'></FaWalking>
            <p className={open ? 'block font-semibold text-gray-600 cursor-pointer  w-20' : 'hidden font-semibold text-gray-600 w-20'}>Delivery zone</p>
          </NavLink>
          <NavLink to='/orders' className={({ isActive }) => isActive ? 'flex flex-row justify-between gap-x-4 items-center scale-125  ' : 'flex flex-row justify-between gap-x-4 items-center'}>
          <BiCommentAdd className='w-8 h-10 mx-auto font-light text-gray-700'></BiCommentAdd>
            <p className={open ? 'block font-semibold text-gray-600 cursor-pointer  w-20' : 'hidden font-semibold text-gray-600 w-20'}>Order</p>
          </NavLink>
          <div className='flex flex-row justify-between gap-x-4 items-center'>
            <RiChatUploadFill className='w-8 h-10 mx-auto font-light text-gray-700'></RiChatUploadFill>
            <p className={open ? 'block font-semibold text-gray-600 cursor-pointer  w-20' : 'hidden font-semibold text-gray-600 w-20'}>Reviews</p>
          </div>
        </div>
        <div className='absolute bottom-0 left-5 flex flex-col gap-y-2'>
          <div className='flex flex-row justify-between gap-x-4 items-center'>
            <AiFillSafetyCertificate className='w-8 h-10 mx-auto font-light text-gray-700'></AiFillSafetyCertificate>
            <p className={open ? 'block font-semibold text-gray-600 cursor-pointer  w-20' : 'hidden font-semibold text-gray-600 w-20'}>Privacy & policy</p>
          </div>
          <div className='flex flex-row justify-between gap-x-4 items-center'>
            <IoLogOutOutline className='w-8 h-10 mx-auto font-light text-gray-700'></IoLogOutOutline>
            <p className={open ? 'block font-semibold text-gray-600 cursor-pointer  w-20' : 'hidden font-semibold text-gray-600 w-20'}>Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
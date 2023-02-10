import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import circleImage from '../../../assets/images/bg-dark.png'
import './Navbar.css';

const ProjectDetailsNavbar = () => {
    const scroll = (id_name) => {
        const section = document.querySelector(`#${id_name}`);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const menuItems = <React.Fragment>
        {/* <li className='transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'
            onClick={() => scroll('banner')} >
            <Link to="/">Home</Link></li> */}
    </React.Fragment >

    return (
        <div>
            <div className="navbar bg-base-100 text-lg text-[#2f373e] fixed top-0 z-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#C2E8FF] rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    <div className='ml-8 md:ml-32 lg:pl-8'>
                        <h1 className='text-xl text-shadow-lg bg-[#99d1f4] px-3 py-1 rounded-lg
                        transition ease-in-out delay- hover:-translate-y-1 hover:scale-85 duration-900 hover:rounded-md hover:shadow-lg hover:shadow-white hover:p-2 hover:cursor-pointer
                        '> <Link to='/'>Back to home page </Link></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>

            </div>
        </div >
    );
};

export default ProjectDetailsNavbar;
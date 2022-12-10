import React from 'react';
import { Link } from 'react-router-dom';
import circleImage from '../../../assets/images/circlePic.png'

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li className='first-letter:text-4xl first-letter:font-bold'><Link to="/">Home</Link></li>
        <li ><Link to="/summary">Summary</Link></li>
        <li ><Link to="/Skills">Skills</Link></li>
        <li ><Link to="/projects">Projects</Link></li>
        <li ><Link to="/experiences">Experiences</Link></li>
        <li ><Link to="/education">Education</Link></li>
        <li ><Link to="/about">About me</Link></li>
        <li className='mx-0 lg:mr-12 shadow-xl font-semibold rounded-lg text-[#EB3E0D] shadow-white'><Link to="/resume">Resume</Link></li>
    </React.Fragment>

    return (
        <div>
            <div className="navbar bg-base-100 text-lg font-semibold text-gray-500 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="avatar">
                        <div className="w-20 ml-12 rounded-full ring ring-primary ring-offset-base-100 border-4 border-slate-300">
                            <img src={circleImage} />
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div >
    );
};

export default Navbar;
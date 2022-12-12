import React from 'react';
import { Link } from 'react-router-dom';
import circleImage from '../../../assets/images/bg-dark.png'
import './Navbar.css';

const Navbar = () => {
    const scroll = (id_name) => {
        const section = document.querySelector(`#${id_name}`);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const menuItems = <React.Fragment>
        <li className='transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'
            onClick={() => scroll('banner')} ><Link to="/">Home</Link></li>
        <li className='transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'
            onClick={() => scroll('projects')} > <Link>Projects</Link> </li>
        <li className='transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'
            onClick={() => scroll('skills')} ><Link> Skills</Link ></li>
        <li className='transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'
        > <Link>Experiences</Link> </li>
        <li className='transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'><Link >About me</Link></li>
        <li
            onClick={() => scroll('contact')} className='mx-0 lg:mr-12 font-semibold rounded-lg text-[#EB3E0D] shadow-lg shadow-white  shake
            transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white'><Link >Contact</Link></li>
    </React.Fragment >

    return (
        <div>
            <div className="navbar bg-base-100 text-lg font-semibold text-gray-500 fixed top-0 z-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    {/* <div className='hidden lg:block lg:ml-8'>
                        <div>
                            <div className="avatar">
                                <div className="w-16 ml-12 rounded-full ring ring-primary ring-offset-base-100 border-4 border-slate-300 ">
                                    <img src={circleImage} alt="small profile" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='ml-8 lg:pl-8'>
                        <h1 className='text-xl tracking-[3px] font-sans text-orange-600 text-shadow-lg
                        transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-slate-100 duration-900 hover:rounded-md hover:shadow-lg hover:shadow-white hover:p-2 hover:cursor-pointer
                        '
                            onClick={() => scroll('banner')}>Portfolio Website</h1>
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
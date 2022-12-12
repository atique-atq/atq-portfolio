import React from 'react';
import { useRouteError } from 'react-router-dom';
import notFoundImage from '../../../assets/images/404.png';
import Navbar from '../Navbar/Navbar';


const DisplayError = () => {
    const error = useRouteError();


    return (
        <div>
            <Navbar></Navbar>
            < div className='bg-white my-20 pt-20 mx-[12%] flex justify-center items-center ' >
                <div>
                    <p className='text-red-600 text-center text-3xl font-mono font-bold'>Page Not Found  <small className='italic text-sm text-gray-500'>{error.statusText || error.message}</small></p>
                    <img className='w-5/12 mx-auto' src={notFoundImage} alt="" />
                </div>
            </div >
        </div>

    );
};

export default DisplayError;
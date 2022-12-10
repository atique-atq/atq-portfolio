import React from 'react';
import profile from '../../assets/images/removedBg.png'

const Banner = () => {
    return (
        <div >
            <div className="hero px-[5%]">
                <div className="hero-content flex-col lg:flex-row-reverse lg:pr-4">
                    <div className='lg:ml-44 rounded-full bg[#E5EBEE] shadow-xl shadow-white'>
                        <img src={profile} alt="" className="rounded-full w-80  shadow-lg shadow-white" />
                    </div>
                    {/* <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div> */}
                    <div className='mt-8 lg:ml-1 w-7/12'>
                        <h1 className="text-4xl font-bold ">Want Used Dresses?</h1>
                        <h1 className="text-3xl font-semibold text-gray-500 my-4">Best Condition Must?</h1>
                        <p className="text-md text-gray-500 mb-8 font-sans pl-4 border-gray-600 border-l-4">Over 1 million people around the country are giving and getting cheap/free second hand dresses in their local communities. Just explore and order from our verified sellers and buyers.</p>
                        <button className="btn btn-primary bg-[#fd6288] border-0">Explore Dresses</button>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default Banner;
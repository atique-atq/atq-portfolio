import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profile from '../../assets/images/removedBg.png'

const Banner = () => {
    return (
        <div >
            <div className="hero px-[5%]">
                <div className="hero-content flex-col lg:flex-row-reverse lg:pr-4">
                    <div className='lg:ml-44 rounded-full bg[#E5EBEE] shadow-xl shadow-white'>
                        <img src={profile} alt="" className="rounded-full w-80  shadow-lg shadow-white" />
                    </div>

                    <div className='mt-8 lg:ml-1 md:w-7/12 w-full'>
                        <h1 className="text-4xl font-bold ">Md. Atiqur Rahman Talukder</h1>
                        <h1 className="text-sm md:text-lg font-semibold text-[#28317c] my-4 font-mono">
                            <TypeAnimation
                                sequence={['Software Engineer.', 1500, 'MERN Stack Developer.', 1500]}
                                //  Continuing previous Text
                                style={{ fontSize: '2em' }}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="mt-8 text-md text-gray-600 mb-8 font-sans pl-4 border-gray-600 border-l-4">Experienced Assistant Software Engineer with a history of working in the multinational IT companies, government IT sector. Skilled in MERN Stack Development, CSS, Tailwind, Bootstrap, Oracle Database, Rails, RSpec, PostgreSQL, TDD. Love to write clean, readable code following DRY, KISS and other methods.</p>
                        <button className="btn btn-primary bg-[#EB3E0D] border-0 shadow-lg shadow-white hover:bg-green-800"> <span className='text-white font-bold'>Download Resume</span> </button>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default Banner;
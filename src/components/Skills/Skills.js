import React from 'react';
import './Skills.css'
import react from '../../assets/images/skill/react.png';
import js from '../../assets/images/skill/js.png';
import node from '../../assets/images/skill/node.png';
import mongoDB from '../../assets/images/skill/mongo.png';
import html from '../../assets/images/skill/html.webp';
import css from '../../assets/images/skill/css.png';
import tailwind from '../../assets/images/skill/tailwind.png';
import bootstrap from '../../assets/images/skill/bootstrap.png';

const Skills = () => {
    return (
        <div className='my-24 pt-20 px-[3%]' id="skills">
            <h1 className='font-serif text-4xl font-bold mb-5 ml-[3%]'>Skills</h1>
            <div className='flex flex-col lg:flex-row justify-center items-center '>
                <div className='py-5 px-5 w-11/12 lg:w-7/12 m-2'>
                    <div className='flex flex-col'>
                        <div className='flex flex-wrap'>
                            <div className='w-20 md:w-24 mr-6'>
                                <div className='flex flex-col justify-center items-center shadow-lg shadow-[#c6c7c9] bg-gradient-to-r from-[#EDF5F6] hover:from-[#ff014f] to-[#effbfd] hover:to-[#ff014f] 
                                p-1 rounded-xl hover:text-white transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-115 duration-900 text-gray-600 font-mono
                                animate-bounce'>
                                    <img className='w-4/6 h-12 rounded-lg' src={react} alt="" />
                                    <p className='mt-2 text-xs font-semibold hover:text-white'>React</p>
                                </div>
                            </div>

                            <div className='w-20 md:w-24 mr-6'>
                                <div className='flex flex-col justify-center items-center shadow-lg shadow-[#c6c7c9] bg-gradient-to-r from-[#EDF5F6] hover:from-[#ff014f] to-[#effbfd] hover:to-[#ff014f] 
                                p-1 rounded-xl hover:text-white transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-115 duration-900 text-gray-600 font-mono'>
                                    <img className='w-4/6 h-12 rounded-lg' src={js} alt="" />
                                    <p className='mt-2 text-xs font-semibold hover:text-white'>Javascript</p>
                                </div>
                            </div>

                            <div className='w-20 md:w-24 mr-6'>
                                <div className='flex flex-col justify-center items-center shadow-lg shadow-[#c6c7c9] bg-gradient-to-r from-[#EDF5F6] hover:from-[#ff014f] to-[#effbfd] hover:to-[#ff014f] 
                                p-1 rounded-xl hover:text-white transition duration-700  ease-in-out hover:-translate-y-1 hover:scale-115 duration-900 text-gray-600 font-mono'>
                                    <img className='w-4/6 h-12 rounded-lg pl-1' src={node} alt="" />
                                    <p className='mt-2 text-xs font-semibold hover:text-white'>Node</p>
                                </div>
                            </div>

                            <div className='w-20 md:w-24 mr-6'>
                                <div className='flex flex-col justify-center items-center shadow-lg shadow-[#c6c7c9] bg-gradient-to-r from-[#EDF5F6] hover:from-[#ff014f] to-[#effbfd] hover:to-[#ff014f] 
                                p-1 rounded-xl hover:text-white transition duration-700  ease-in-out hover:-translate-y-1 hover:scale-115 duration-900 text-gray-600 font-mono'>
                                    <img className='w-4/6 h-12 rounded-lg pl-1' src={mongoDB} alt="" />
                                    <p className='mt-2 text-xs font-semibold hover:text-white'>MongoDB</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-wrap mt-6'>
                            <div className='w-20 md:w-24 mr-6'>
                                <div className='flex flex-col justify-center items-center shadow-lg shadow-[#c6c7c9] bg-gradient-to-r from-[#E7ECF0] hover:from-[#ff014f] to-white hover:to-[#ff014f]
                                p-1 rounded-xl hover:text-white transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-115 duration-900 text-gray-600 font-mono'>
                                    <img className='w-4/6 h-12 rounded-lg' src={html} alt="" />
                                    <p className='mt-2 text-xs font-semibold hover:text-white'>HTML</p>
                                </div>
                            </div>

                            <div className='w-20 md:w-24 mr-6'>
                                <div className='flex flex-col justify-center items-center shadow-lg shadow-[#c6c7c9] bg-gradient-to-r from-[#E7ECF0] hover:from-[#ff014f] to-white duration-700 hover:to-[#ff014f]
                                p-1 rounded-xl hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-115 duration-900 text-gray-600 font-mono'>
                                    <img className='w-4/6 h-12 rounded-lg' src={css} alt="" />
                                    <p className='mt-2 text-xs font-semibold hover:text-white'>CSS</p>
                                </div>
                            </div>

                            <div className='w-20 md:w-24 mr-6'>
                                <div className='flex flex-col justify-center items-center shadow-lg shadow-[#c6c7c9] bg-gradient-to-r from-[#E7ECF0] hover:from-[#ff014f] to-white duration-700 hover:to-[#ff014f]
                                p-1 rounded-xl hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-115 duration-900 text-gray-600 font-mono'>
                                    <img className='w-4/6 h-12 rounded-lg pl-1' src={tailwind} alt="" />
                                    <p className='mt-2 text-xs font-semibold hover:text-white'>Tailwind</p>
                                </div>
                            </div>

                            <div className='w-20 md:w-24 mr-6'>
                                <div className='flex flex-col justify-center items-center shadow-lg shadow-[#c6c7c9] bg-gradient-to-r from-[#E7ECF0] hover:from-[#ff014f] to-white duration-700 hover:to-[#ff014f]
                                p-1 rounded-xl hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-115 duration-900 text-gray-600 font-mono'>
                                    <img className='w-4/6 h-12 rounded-lg pl-1' src={bootstrap} alt="" />
                                    <p className='mt-2 text-xs font-semibold hover:text-white'>Bootstrap</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>

                <div className='w-10/12 lg:w-5/12 bg-white m-2 rounded mx-8 shadow-lg shadow-slate-400 hover:shadow-white
                transition ease-in-out delay- hover:-translate-x-3 hover:scale-110 hover:bg-white duration-900'>
                    <div className="p-10 flex flex-col space-y-3">
                        <div data-aos="fade-left" data-aos-duration="500">
                            <h1>CSS Framework</h1>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div style={{ width: "95%" }} className="absolute top-0 h-4 rounded shim-solidGreen"></div>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <h1>Javascript</h1>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div style={{ width: "90%" }} className="absolute top-0 h-4 rounded shim-solidBlue"></div>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1200">
                            <h1>React.js</h1>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div style={{ width: "87%" }} className="absolute top-0 h-4 rounded shim-green"></div>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1400">
                            <h1>MongoDB</h1>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div style={{ width: "80%" }} className="absolute top-0 h-4 rounded shim-blue"></div>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500">
                            <h1>Node.js</h1>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div style={{ width: "70%" }} className="absolute top-0 h-4 rounded shim-red"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
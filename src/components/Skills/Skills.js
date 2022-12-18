import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className='my-24 pt-20 px-[8%]' id="skills">
            <h1 className='font-serif text-5xl font-bold mb-5'>Skills</h1>
            <div className='flex flex-col lg:flex-row justify-center items-center bg-[#68b3afdc]  shadow-lg shadow-white'>
                <div className='py-5 px-5 w-11/12 lg:w-7/12 m-2 
                transition ease-in-out delay- hover:-translate-x-1 hover:scale-115'>
                    <div className='bg-white p-2 rounded-md shadow-md shadow-slate-400 hover:shadow-white
                    transition ease-in-out delay- hover:-translate-x-1 hover:scale-115 hover:bg-white duration-900'
                        data-aos="fade-down" data-aos-duration="500">
                        <p className='font-extrabold font-mono text-lg text-[rgb(30,164,226)]'>Expertise</p>
                        <h1 className='text-md font-sans mt-1 font-medium'> Html, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, MongoDB </h1>
                    </div>

                    <div className='bg-white p-2 rounded-md mt-3 shadow-md shadow-slate-400 hover:shadow-white
                    transition ease-in-out delay- hover:-translate-x-1 hover:scale-105 hover:bg-white duration-900'
                        data-aos="fade-down" data-aos-duration="1000">
                        <p className='font-extrabold font-mono text-lg text-[rgb(30,164,226)]'>Comfortable</p>
                        <h1 className='text-md font-sans mt-1 font-medium'> Node.js, Rails, RSpec, PostgreSQL, Oracle, Java, Rest API</h1>
                    </div>

                    <div className='bg-white p-2 rounded-md mt-3 shadow-md shadow-slate-400 hover:shadow-white
                    transition ease-in-out delay- hover:-translate-x-1 hover:scale-105 hover:bg-white duration-900'
                        data-aos="fade-down" data-aos-duration="1300">
                        <p className='font-extrabold font-mono text-lg text-[rgb(30,164,226)]'>Familiar</p>
                        <h1 className='text-md font-sans mt-1 font-medium'> Material-UI, Typescript, GraphQL, Redux, Jest</h1>
                    </div>

                    <div className='bg-white p-2 rounded-md mt-3 shadow-md shadow-slate-400 hover:shadow-white
                    transition ease-in-out delay- hover:-translate-x-1 hover:scale-105 hover:bg-white duration-900'
                        data-aos="fade-down" data-aos-duration="1500">
                        <p className='font-extrabold font-mono text-lg text-[rgb(30,164,226)]'>Tools</p>
                        <h1 className='text-md font-sans mt-1 font-medium'>Firebase, Git, Netlify, Vercel, Chrome Dev Tools</h1>
                    </div>
                </div>

                <div className='w-10/12 lg:w-5/12 bg-white m-2 rounded mx-8 shadow-lg shadow-slate-400 hover:shadow-white
                transition ease-in-out delay- hover:-translate-x-3 hover:scale-110 hover:bg-white duration-900'>
                    {/* <span className='flex flex-row items-center justify-center p-3'> <span>JavaScript:</span> <progress className="ml-4 progress progress-success w-full inline-block h-4  bg-base-100" value="90" max="100"></progress></span> */}
                    {/* 
                    <span className='flex flex-row items-center justify-center p-3 '> <span className='pl-4'>React.js:</span> <progress className="ml-4 progress progress-success w-full inline-block h-4 bg-base-100" value="90" max="100"></progress></span>

                    <span className='flex flex-row items-center justify-center p-3 '> <span className='pl-1'>MongoDB:</span> <progress className="ml-4 progress progress-info w-full inline-block h-4 bg-base-100" value="75" max="100"></progress></span>

                    <span className='flex flex-row items-center justify-center p-3 '> <span className='pl-5'>Node.js:</span> <progress className="ml-4 progress progress-warning w-full inline-block h-4 bg-base-100" value="70" max="100"></progress></span> */}
                    <div className="p-10 flex flex-col space-y-3">
                        <div data-aos="fade-left" data-aos-duration="500">
                            <h1>Tailwind</h1>
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
                                <div style={{ width: "85%" }} className="absolute top-0 h-4 rounded shim-green"></div>
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
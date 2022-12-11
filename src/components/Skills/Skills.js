import React from 'react';

const Skills = () => {
    return (
        <div className='my-24 pt-20 px-[8%]' id="skills">
            <h1 className='font-serif text-5xl font-bold mb-5'>Skills</h1>
            <div className='flex flex-col lg:flex-row justify-center items-center bg-[#E5EAEE] shadow-lg shadow-white'>
                <div className='py-5 px-5 w-11/12 lg:w-7/12 my-auto
                transition ease-in-out delay-00 hover:-translate-y-1 hover:scale-105 hover:bg-white duration-900'>
                    <h1 className='text-lg font-sans font-semibold mt-5'><span className='text-xl font-semibold text-[rgb(30,164,226)] '>Expertise: </span> Html, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, MongoDB, Firebase</h1>
                    <h1 className='text-lg font-sans font-semibold mt-5'><span className='text-xl font-semibold text-[rgb(30,164,226)] '>Comfortable: </span> Node.js, Rails, RSpec, PostgreSQL, Oracle, Java, Rest API</h1>
                    <h1 className='text-lg font-sans font-semibold mt-5'><span className='text-xl font-semibold text-[rgb(30,164,226)] '>Familiar: </span> Material-UI, Typescript, GraphQL, Redux, Jest</h1>
                    <h1 className='text-lg font-sans font-semibold mt-5'><span className='text-xl font-semibold text-[rgb(30,164,226)] '>Tools: </span> Git, Netlify, Vercel, Chrome Dev Tools</h1>
                </div>

                <div className='w-11/12 lg:w-5/12 bg-white m-2 rounded mx-8 
                transition ease-in-out delay- hover:-translate-y-3 hover:scale-125 hover:bg-[#E5EAEE] duration-900'>
                    <span className='flex flex-row items-center justify-center p-3'> <span>JavaScript:</span> <progress className="ml-4 progress progress-success w-full inline-block h-4  bg-base-100" value="90" max="100"></progress></span>

                    <span className='flex flex-row items-center justify-center p-3 '> <span className='pl-4'>React.js:</span> <progress className="ml-4 progress progress-success w-full inline-block h-4 bg-base-100" value="90" max="100"></progress></span>

                    <span className='flex flex-row items-center justify-center p-3 '> <span className='pl-1'>MongoDB:</span> <progress className="ml-4 progress progress-info w-full inline-block h-4 bg-base-100" value="75" max="100"></progress></span>

                    <span className='flex flex-row items-center justify-center p-3 '> <span className='pl-5'>Node.js:</span> <progress className="ml-4 progress progress-warning w-full inline-block h-4 bg-base-100" value="70" max="100"></progress></span>
                </div>
            </div>
        </div>
    );
};

export default Skills;
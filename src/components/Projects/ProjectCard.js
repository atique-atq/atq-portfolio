import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const { _id, name, title, technologies, liveUrl } = project;
    console.log('---', name)

    return (
        <div >
            <div className="card shadow-xl shadow-white  place-content-center rounded-none w-full bg-[#EDF1F3] p-4 h-72 w-full text-red-700  
            transition ease-in-out delay-00 hover:-translate-y-1 hover:scale-80 hover:bg-indigo-200 duration-900">
                <h1 className='font-sans text-gray-700 font-bold text-2xl '>{name}</h1>
                <p className='text-sm font-semibold text-gray-600 pt-5'>{title}</p>
                <p className='text-sm  text-gray-600 pt-5'> <span className='font-bold'>Technologies:</span> <span>{technologies}</span></p>
                <p className='border-0 w-full text-info text-right text-sm italic'>Show Details <FaArrowAltCircleRight className='inline-block'></FaArrowAltCircleRight></p>
            </div>
        </div >
    );
};

export default ProjectCard;
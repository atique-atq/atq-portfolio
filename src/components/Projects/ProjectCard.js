import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const { _id, name, title, technologies, liveUrl, image } = project;

    return (
        <div >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <div className="card shadow-xl shadow-white  place-content-center rounded-none w-full bg-[#EDF1F3] p-4 h-96 w-full 
            transition ease-in-out delay-00 hover:-translate-y-1 hover:scale-80 hover:bg-white duration-900">
                    <img className='w-9/12 mx-auto mb-2' src={image} alt="" />
                    <h1 className='font-sans text-info font-semibold text-xl '>{name}</h1>
                    <p className='text-sm font-semibold text-gray-600 pt-5'>{title}</p>
                    <p className='text-sm  text-gray-600 py-5'> <span className='font-bold'>Technologies:</span> <span>{technologies}</span></p>
                    <p className='border-0 w-full text-info text-right text-sm italic'>Show Details <FaArrowAltCircleRight className='inline-block'></FaArrowAltCircleRight></p>
                </div>
            </a>
        </div >
    );
};

export default ProjectCard;
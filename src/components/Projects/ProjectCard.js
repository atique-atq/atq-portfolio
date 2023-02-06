import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { _id, name, title, technologies, liveUrl, image, shortDescription } = project;

    return (
        <div >
            <div className="card shadow-lg shadow-blue-300  place-content-center rounded-none bg-[#C2E8FF] rounded-tr-3xl p-4 h-96 w-11/12 
            transition ease-in-out delay-00 hover:-translate-y-2 hover:scale-105 hover:bg-white duration-900">
            <Link to={`project/${_id}`}>
                <img className='md:w-9/12 w-8/12 mx-auto mb-2' src={image} alt="" />
                <div>
                        <div>
                            <div className='h-48'>
                                <h1 className='font-sans text-[#0B57D0] font-semibold text-lg pt-3'>{name}</h1>
                                <p className='text-sm font-semibold text-gray-600 pt-5 mt-0 pt-0'>{title}</p>
                                <p className='text-xs  text-gray-600 py-5'> <span>{shortDescription}</span></p>
                            </div>
                            <div className='flex justify-end'>
                                <p className='bg-[#FC6F5C] border-0 w-6/12 text-white text-right text-sm font-bold p-2 rounded-lg'>Show Details <FaArrowAltCircleRight className='inline-block'></FaArrowAltCircleRight></p>
                            </div>
                        </div>
                </div>
             </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
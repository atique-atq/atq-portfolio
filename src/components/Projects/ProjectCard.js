import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { _id, name, title, technologies, liveUrl, image, shortDescription } = project;

    return (
        <div >
            <div className="card shadow-xl shadow-white  place-content-center rounded-none w-full bg-[#EDF1F3] p-4 h-96 w-full 
            transition ease-in-out delay-00 hover:-translate-y-1 hover:scale-80 hover:bg-white duration-900">
                <img className='w-9/12 mx-auto mb-2' src={image} alt="" />

                <div>
                    <Link to={`project/${_id}`}>
                        <div>
                            <h1 className='font-sans text-info font-semibold text-xl pt-3'>{name}</h1>
                            <p className='text-sm font-semibold text-gray-600 pt-5 mt-0 pt-0'>{title}</p>
                            <p className='text-sm  text-gray-500 py-5'> <span>{shortDescription}</span></p>
                            <p className='border-0 w-full text-info text-right text-sm italic font-bold text-shadow-sm'>Show Details <FaArrowAltCircleRight className='inline-block'></FaArrowAltCircleRight></p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
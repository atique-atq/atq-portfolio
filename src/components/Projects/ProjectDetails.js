import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const projectDetails = useLoaderData();
    console.log('came in details:', projectDetails?.name);
    // if (!projectDetails) {
    //     console.log('not available');
    //     return;
    // }
    // console.log('---', projectDetails);
    return (
        <div className='mt-20'>
            <h1 className='text-red-700 text-4xl '>This is project Details </h1>
        </div>
    );
};

export default ProjectDetails;
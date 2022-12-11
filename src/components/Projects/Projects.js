import React from 'react';
import ProjectCard from './ProjectCard';
import shareWear from '../../assets/images/shareWear.JPG';
import docService from '../../assets/images/docService.JPG';
import techLearning from '../../assets/images/techService.JPG'

const Projects = () => {
    const projects = [
        {
            _id: '1',
            name: 'Share Wear Bd',
            title: 'E-commerce website for buying and selling second-hand dresses',
            technologies: 'Tailwind CSS, daisyUI, React.js, Node.js, MongoDB, Vercel',
            liveUrl: 'https://sharewearbd.web.app',
            image: shareWear
        },
        {
            _id: '2',
            name: 'Doc Service',
            title: 'Service and Review based website for a doctor',
            technologies: 'Firebase, Tailwind CSS, React.js, Node.js, MongoDB',
            liveUrl: 'https://doctor-service-atq.web.app',
            image: docService,
        },
        {
            _id: '3',
            name: 'Tech Learning Bd',
            title: ' Edutech site for technology learning and practicing',
            technologies: 'Bootstrap, Firebase, React.js, Node.js, MongoDB',
            liveUrl: 'https://tech-learning-bd-880c4.web.app',
            image: techLearning,
        }
    ]

    return (
        <div className='my-24 mx-[8%] mt-40' id='projects'>
            <h1 className='font-serif text-5xl font-bold mb-5'>Projects</h1>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    projects?.map((project) => <ProjectCard
                        key={project._id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div >
    );
};

export default Projects;
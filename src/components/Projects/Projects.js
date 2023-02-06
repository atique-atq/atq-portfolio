import React from 'react';
import ProjectCard from './ProjectCard';
import shareWear from '../../assets/images/shareWear.JPG';
import docService from '../../assets/images/docService.JPG';
import techLearning from '../../assets/images/techService.JPG'

const Projects = () => {
    const projects = [
        {
            _id: 'phsw-20221',
            name: 'Share Wear Bd',
            title: 'Website for buying and selling second-hand dresses',
            shortDescription: 'Implemented admin, seller and buyer authorization. Admin can verify seller, delete any post, any buyer or seller. Also implemented uploading a product, book and purchase completion.',
            technologies: 'Tailwind CSS, daisyUI, React.js, Node.js, MongoDB, Vercel',
            liveUrl: 'https://sharewearbd.web.app',
            image: shareWear
        },
        {
            _id: 'phds-20222',
            name: 'Doc Service',
            title: 'Service and Review based website for a doctor',
            technologies: 'Firebase, Tailwind CSS, React.js, Node.js, MongoDB',
            shortDescription: 'Users can find the details of a service and see other’s reviews about that service. Also can add/edit his reviews. Used authentication and Private route, Context API. Also made responsive',
            liveUrl: 'https://doctor-service-atq.web.app',
            image: docService,
        },
        {
            _id: 'phtl-20223',
            name: 'Tech Learning Bd',
            title: 'Edutech site for technology learning and practicing',
            shortDescription: 'After log in user can see detailed and practice the course. Besides username and password, user can also log in using Google, GitHub',
            technologies: 'Bootstrap, Firebase, React.js, Node.js, MongoDB',
            liveUrl: 'https://tech-learning-bd-880c4.web.app',
            image: techLearning,
        }
    ]

    return (
        <div>
            <div className='my-24 pt-20 px-[8%]' id='projects'>
                 <h1 className='font-serif text-4xl font-bold mb-5'>Skills</h1>
                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2'>
                    {
                        projects?.map((project) => <ProjectCard
                            key={project._id}
                            project={project}
                        ></ProjectCard>)
                    }
                </div>
            </div >
        </div>
    );
};

export default Projects;
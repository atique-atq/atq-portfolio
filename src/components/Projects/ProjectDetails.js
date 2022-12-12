import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ProjectDetails = () => {
    const projectDetails = useLoaderData();
    const { name, title, description, technologies, liveUrl, image } = projectDetails;

    return (
        <div className='mt-6 my-6 pt-20 px-[12%]' >
            <br />
            <div className='bg-white py-8 rounded shadow-xl shadow-gray-500'>
                <Carousel cols={3} rows={1} gap={6} loop autoplay={6000}>

                    {
                        image?.map((singleImg, index) => <Carousel.Item
                            key={index}>
                            <PhotoProvider>
                                <PhotoView src={singleImg}>
                                    <img width="100%" className='w-96 shadow-lg border border-6 border-gray-400 hover:cursor-pointer'
                                        src={singleImg} alt="project screenshot" />
                                </PhotoView>
                            </PhotoProvider>
                        </Carousel.Item>)
                    }
                </Carousel>
                <div className='mt-4 px-4'>
                    <h1 className='font-sans text-info font-semibold text-xl py-3 text-center text-shadow-sm'>{name}:<span className='pl-4 text-lg font-semibold text-gray-600 pt-5 mt-0 pt-0'>{title}</span> </h1>
                    <div class="grid md:grid-cols-3  grid-cols-1 gap-4">
                        <div className='ml-4 col-span-2 border-gray-200 border-r-4 pr-4'>
                            <h1 className='font-semibold font-sans'>Description:</h1>
                            <ul className="list-disc ml-6 text-sm">
                                {
                                    description.map((singleDescription, index) => <li className='pb-4' key={index}>
                                        {singleDescription}
                                    </li>)
                                }
                            </ul>
                        </div>

                        <div className='mx-auto'>
                            <button className="btn btn-outline btn-secondary bg-[#89dafd] border-none mb-3"><a href='https://sharewearbd.web.app/' target="_blank" rel="noopener noreferrer">Live URL</a> </button>
                            <br />
                            <button className="btn btn-outline btn-secondary bg-[#89dafd] border-none  mb-3"><a href='https://sharewearbd.web.app/' target="_blank" rel="noopener noreferrer">Git Repo-Client</a> </button>
                            <br />
                            <button className="btn btn-outline btn-secondary bg-[#89dafd] border-none  mb-3"><a href='https://sharewearbd.web.app/' target="_blank" rel="noopener noreferrer">Git Repo-Server</a> </button>

                            <h1 className='mt-4 font-semibold'> <span className='font-bold'>Technology Used:</span>  Tailwind CSS, daisyUI, React.js, Node.js, MongoDB, Vercel, Firebase</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectDetails;
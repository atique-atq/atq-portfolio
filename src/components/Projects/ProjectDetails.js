import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
                                    <img width="100%" className='w-96 shadow-lg border border-6 border-gray-400 transition ease-in-out delay- hover:-translate-y-3 hover:scale-105 duration-900 hover:shadow-lg hover:shadow-gray-300'
                                        src={singleImg} alt="project screenshot" />
                                </PhotoView>
                            </PhotoProvider>
                            {/* <img width="100%" className='w-96 shadow-lg border border-6 border-gray-400 transition ease-in-out delay- hover:-translate-y-3 hover:scale-105 duration-900 hover:shadow-lg hover:shadow-gray-300'
                                src={singleImg} alt="project screenshot" /> */}
                        </Carousel.Item>)
                    }
                </Carousel>
            </div>
        </div >
    );
};

export default ProjectDetails;
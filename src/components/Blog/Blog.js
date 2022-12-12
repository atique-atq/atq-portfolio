import React from 'react';
import comingSoon from '../../assets/images/coming-soon.webp'


const Blog = () => {
    return (
        <div>
            < div className='bg-white my-20 pt-20 mx-[12%] flex justify-center items-center ' >
                <div>

                    <img className='w-5/12 mx-auto' src={comingSoon} alt="" />
                </div>
            </div >
        </div>
    );
};

export default Blog;
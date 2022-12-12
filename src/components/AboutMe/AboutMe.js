import React from 'react';
import aboutPic from '../../assets/images/t-removeD.png';

const AboutMe = () => {
    return (
        <div className='my-24 px-[8%] mt-20 pt-20' id="about-me">
            <h1 className='font-serif text-5xl font-bold mb-5'>About me</h1>

            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-7/12 w-11/12
                    transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white' data-aos="fade-right" data-aos-duration="1000">
                        <img src={aboutPic} className="w-full rounded-lg shadow-2xl" alt='' />
                    </div>

                    <div className='bg-base-100 p-3 lg:w-7/12 w-11/12 shadow-lg rounded-md'>
                        <p className="py-3 font-semibold font-mono text-shadow-lg">Professional Experiences:</p>
                        <p className=''> <small> <strong> 1. Assistant Programmer</strong>  - DoICT, ICT Division <span className='italic'> [2019 July – Present]</span>
                            <br />Technologies: Bootstrap, Tailwind CSS, Javascript, React.js, Node.js</small>
                        </p>

                        <p className='pt-2'>
                            <small>
                                <strong> 2. Software Engineer </strong>
                                - Welldev Bangladesh Ltd <span className='italic'> [2017 Nov – 2019 Jun]</span>
                                <br />Technologies: Rails, Rspec, PostgreSQL, Hotel, Car, Flight Booking API (GDS)</small>
                        </p>

                        <p className='pt-2'><small> <strong> 3. Software Engineering Associate </strong>-Accenture Bangladesh Ltd <span className='italic'> [2017 Nov – 2019 Jun] </span>
                            <br />Technologies: Oracle, JavaScript, HTML, CSS, Java</small>
                        </p>
                    </div>

                    <div className='bg-[#D0DAE2] rounded-lg p-1 shadow-lg lg:w-7/12 w-11/12
                    transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white' data-aos="fade-left" data-aos-duration="1000">
                        <p className="py-4 font-semibold font-mono text-shadow-lg pt-6">Education:</p>
                        <strong> <small className='italic'>B.Sc (Engineering) in ICT</small></strong><br />
                        <small>Mawlana Bhashani Science and Technology University</small> <br />
                        <small>Passing Year: 2015 || CGPA: 3.39</small>
                        <hr className='mt-3' />

                        <p className="py-3 font-semibold font-mono text-shadow-lg">Language:</p>
                        <span className="py-3 font-semibold font-mono text-sm">Bangla:</span> <small>Native </small>
                        <span className="py-3 font-semibold font-mono text-sm pl-3"> English:</span> <small>Fluent</small>
                        <br />
                        <br /><hr />
                        <br />
                        <span className="py-3 font-semibold font-mono text-sm">Hobby:</span> <small>Music, Cricket</small> <br />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;
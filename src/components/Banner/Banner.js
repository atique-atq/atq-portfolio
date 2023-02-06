import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/images/removedBg.png";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaFacebook,
} from "react-icons/fa";

const Banner = () => {
  const downloadResume = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Md Atiqur Rahman-Resume.pdf";
        alink.click();
      });
    });
  };
  // text-[#28317c]

  return (
    <div>
      <div className="hero px-12 mx-0 py-[5%] mt-5" id="banner">
        <div className="hero-content flex-col lg:flex-row-reverse lg:pr-4 justify-between">
          <div className="lg:ml-2 rounded-full bg[#E5EAEE] shadow-xl shadow-white">
            <img
              src={profile}
              alt=""
              className="rounded-full w-96  shadow-lg shadow-white
                        transition ease-in-out delay- hover:-translate-x-1 hover:scale-105 hover:bg-white duration-900"
            />
          </div>

          <div
            className="mt-8 lg:ml-12 md:w-7/12 w-full"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h1 className="text-4xl font-bold ">Md. Atiqur Rahman Talukder</h1>
            <h1 className="text-sm md:text-lg font-semibold text-info my-4 font-mono">
              <TypeAnimation
                sequence={[
                  "Software Engineer.",
                  1800,
                  "MERN Stack Developer.",
                  1500,
                ]}
                //  Continuing previous Text
                style={{ fontSize: "2em" }}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
            <p
              className="mt-8 text-md text-gray-800 mb-8 font-sans pl-4 border-white border-l-8">
              I am working in MERN stack development specially in React and Javascript. Also I have professional experience in API development, writing test code and PR review. Spanning over four years career development, I am involved in ...<label htmlFor="banner-desc-modal" 
              className="text-sm italic underline text-gray-400 font-semibold hover:text-blue-700 hover:cursor-pointer">see more</label>
            </p>

            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-6" className="btn">open modal</label> */}

            <button className="btn btn-primary bg-[#EB3E0D] border-0 shadow-lg shadow-white hover:bg-green-800">
              <span className="text-white font-bold" onClick={downloadResume}>
                Download Resume
              </span>{" "}
            </button>
          </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="banner-desc-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle mt-8">
              <div className="modal-box w-full bg-white p-8">
                <p className="text-sm">I am working in MERN stack development specially in React and Javascript. Also I have professional experience in API development, writing test code and PR review. Spanning over four years career development, I am involved in:</p>

                <ul className="list-[square] text-sm mt-6">
                  <li>
                    Working in frontend development using <span className="font-semibold">React, Javascript</span>  and other CSS frameworks for responsive designs and single page application <span className="font-semibold">(SPA)</span>.
                  </li>
                  <li className="mt-4">
                    <span className="font-semibold">MERN</span> stack developer at government in-house development using Node, Express, MongoDB and React.
                  </li>
                  <li className="mt-4">
                    At my previous organization, worked in API team for flight, hotel and car rental booking system <span className="text-blue-600">(https://welltravel.welltravel.com)</span> using  <span className="font-semibold">Rails,</span> RSpec, PostgreSQL. With the culture of writing<span className="font-semibold"> test code and mandatory PR review</span>, here I was solely responsible for integrating car rental system besides others.
                  </li>
                  <li className="mt-4">
                    Experienced in SDLC as well as requirement analysis, terms of reference, UAT, supporting 24/7 on-site or remote as per SLA..
                  </li>
                </ul>

                <div>
                  <p className="text-md mt-6 flex"> <span className="font-semibold text-gray-500">Profile:</span> 
                    <a href="https://www.linkedin.com/in/md-atiqurrahman/" target="_blank" rel="noreferrer">
                    <FaLinkedin
                    className="ml-3  text-2xl shadow-lg rounded-full shadow-blue-300 
                    transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white"></FaLinkedin>
                    </a>

                    <a href="https://github.com/atique-atq" target="_blank" rel="noreferrer">
                    <FaGithub
                    className="ml-4 text-2xl shadow-lg rounded-full shadow-blue-300 
                    transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white"></FaGithub>
                    </a>
                  </p> 
                </div>
                <div className="modal-action mt-0">
                  <label htmlFor="banner-desc-modal" className="btn font-bold bg-[#C2E8FF] text-[#EB3E0D]">Close</label>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

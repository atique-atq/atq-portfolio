import React from "react";
import aboutPic from "../../assets/images/t-removeD.png";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaFacebook,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="my-24 px-[8%] mt-20 pt-20" id="about-me">
      <h1 className="font-serif text-5xl font-bold mb-5">About me</h1>

      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div
            className="lg:w-7/12 w-11/12"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={aboutPic}
              className="w-full hidden rounded-lg shadow-2xl
              transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white"
              alt=""
            />

            <div className="mt-3 flex justify-evenly p-1 bg-base rounded-md">
              <div>
                <a
                  href="https://github.com/atique-atq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub
                    className="text-3xl shadow-lg rounded-full shadow-white 
                  transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white
                  "
                  ></FaGithub>
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/md-atiqurrahman/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin
                    className="text-3xl shadow-lg rounded-full shadow-white 
                  transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white
                  "
                  ></FaLinkedin>
                </a>
              </div>

              <div>
                <a
                  href="https://www.facebook.com/atique.atq/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook
                    className="text-3xl shadow-lg rounded-full shadow-white 
                  transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white
                  "
                  ></FaFacebook>
                </a>
              </div>

              <div>
                <a
                  href="https://stackoverflow.com/users/5283560/atq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaStackOverflow
                    className="text-3xl shadow-lg rounded-full shadow-white 
                  transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white
                  "
                  ></FaStackOverflow>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-base-100 p-3 lg:w-7/12 w-11/12 shadow-lg rounded-md">
            <p className="py-3 font-semibold font-mono text-shadow-lg">
              Professional Experiences:
            </p>
            <div className="outline outline-1 rounded-lg p-2 text-xs shadow-lg shadow-white">
              <div className="flex flex-wrap justify-between font-semibold">
                <div>1. Assistant Programmer</div>

                <div className="text-slate-500">
                  <span className="text-slate-400 italic">@</span> DoICT, ICT
                  Division
                </div>
              </div>
              <div className="mt-2">
                <p>
                  <span className="font-semibold">Technologies: </span>{" "}
                  Bootstrap, Tailwind CSS, Javascript, React.js, Node.js
                </p>
              </div>

              {/* modal */}
              {/* The button to open modal */}
              <div className="flex justify-end">
                <label
                  htmlFor="my-modal-6"
                  className="outline outline-0 p-1 mt-2 rounded content-end bg-[#d2d5d6] cursor-pointer
                  hover:bg-white"
                >
                  Show Details
                </label>
                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">
                      Congratulations random Internet user!
                    </h3>
                    <p className="py-4">
                      You've been selected for a chance to get one year of
                      subscription to use Wikipedia for free!
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn">
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="pt-2">
              <small>
                <strong> 2. Software Engineer - Welldev Bangladesh Ltd</strong>{" "}
                <span className="italic"> [2017 Nov – 2019 Jun]</span>
                <br />
                Technologies: Rails, Rspec, PostgreSQL, Hotel, Car, Flight
                Booking API (GDS)
              </small>
            </p>

            <p className="pt-2">
              <small>
                {" "}
                <strong>
                  {" "}
                  3. Software Engineering Associate - Accenture Bangladesh Ltd
                </strong>{" "}
                <span className="italic"> [2017 Nov – 2019 Jun] </span>
                <br />
                Technologies: Oracle, JavaScript, HTML, CSS, Java
              </small>
            </p>
          </div>

          <div
            className="bg-[#D0DAE2] rounded-lg p-1 shadow-lg lg:w-7/12 w-11/12
                    transition ease-in-out delay- hover:-translate-y-1 hover:scale-100 hover:bg-white duration-900 hover:rounded-md hover:shadow-xl hover:shadow-white"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <p className="py-4 font-semibold font-mono text-shadow-lg pt-6">
              Education:
            </p>
            <strong>
              {" "}
              <small className="italic">B.Sc (Engineering) in ICT</small>
            </strong>
            <br />
            <small>
              Mawlana Bhashani Science and Technology University
            </small>{" "}
            <br />
            <small>Passing Year: 2015 || CGPA: 3.39</small>
            <hr className="mt-3" />
            <p className="py-3 font-semibold font-mono text-shadow-lg">
              Language:
            </p>
            <span className="py-3 font-semibold font-mono text-sm">
              Bangla:
            </span>{" "}
            <small>Native </small>
            <span className="py-3 font-semibold font-mono text-sm pl-3">
              {" "}
              English:
            </span>{" "}
            <small>Fluent</small>
            <br />
            <br />
            <hr />
            <br />
            <span className="py-3 font-semibold font-mono text-sm">
              Hobby:
            </span>{" "}
            <small>Music, Cricket</small> <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

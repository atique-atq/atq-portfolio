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

          <div className="bg-base-100 p-3 lg:w-8/12 w-11/12 shadow-lg rounded-md">
            <p className="py-3 font-semibold font-mono text-shadow-lg">
              Professional Experiences:
            </p>
            <div className="bg-white outline outline-slate-300 outline-1 rounded-lg p-2 text-xs shadow-md shadow-slate-400">
              <div className="flex flex-nowrap justify-between font-semibold">
                <div>1. Assistant Programmer</div>

                <div className="">
                  <span className="text-slate-600 italic">@</span> DoICT, ICT
                  Division
                </div>
              </div>
              <div className="mt-2">
                <p>
                  <span className="font-bold">Technologies: </span> Bootstrap,
                  Tailwind CSS, Javascript, React.js, Node.js
                </p>
              </div>

              {/* modal */}
              {/* The button to open modal */}
              <div className="flex justify-end">
                <label
                  htmlFor="my-modal-6"
                  className="outline outline-0 p-1 mt-0 rounded content-end bg-[#d2d5d6] cursor-pointer
                  hover:bg-white"
                >
                  Details
                </label>
                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box p-3 ">
                    <div className="border-2 border-slate-300 p-2 rounded-lg">
                      <h3 className=" text-lg">
                        <span className="font-semibold"> Position: </span>
                        Assistant Programmer
                      </h3>
                      <h3 className="text-lg">
                        <span className="font-semibold"> Organization:</span>{" "}
                        DoICT, ICT Division, Bangladesh
                      </h3>
                      <h3 className="text-lg">
                        <span className="font-semibold"> Duration:</span> June,
                        2019 - Present
                      </h3>
                      <hr className="bg-gray-400 border-2" />

                      <div className="py-4 text-lg bg-white p-2 rounded-lg my-2">
                        <span className="text-black font-semibold">
                          Description:
                        </span>{" "}
                        <ul className="list-disc ml-4 ">
                          <li>
                            {" "}
                            Working in government projects and developing
                            in-house software for internal use and also for
                            others government body.
                          </li>
                          <li className="mt-1">
                            Also worked as project manager to collaborate with
                            vendors for building large applications which are
                            being used by all the government employees of
                            Bangladesh.
                          </li>
                        </ul>
                      </div>
                      <p className="text-lg bg-white p-2 rounded-lg">
                        <span className="font-bold">Technologies:</span>
                        Tailwind CSS · React.js · Cascading Style Sheets (CSS) ·
                        Node.js
                      </p>
                      <div className="modal-action">
                        <label
                          htmlFor="my-modal-6"
                          className="text-lg font-bold outline outline-0 px-4 py-2 mt-0 rounded content-end bg-[#6ec5e2] cursor-pointer
                  hover:bg-white"
                        >
                          close
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 bg-white outline outline-slate-300 outline-1 rounded-lg p-2 text-xs shadow-md shadow-slate-400">
              <div className="flex flex-nowrap justify-between font-semibold">
                <div>2. Software Engineer</div>

                <div className="">
                  <span className="text-slate-600 italic">@</span> Welldev
                  Bangladesh Ltd.
                </div>
              </div>
              <div className="mt-2">
                <p>
                  <span className="font-bold">Technologies: </span> Rails,
                  RSpec, React, PostgreSQL
                </p>
              </div>

              {/* modal */}
              {/* The button to open modal */}
              <div className="flex justify-end">
                <label
                  htmlFor="modal-welldev"
                  className="outline outline-0 p-1 mt-1 rounded content-end bg-[#d2d5d6] cursor-pointer
                  hover:bg-white"
                >
                  Details
                </label>
                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="modal-welldev"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box p-2 bg-slate-100">
                    <div className="border-2 border-slate-300 p-2 rounded-lg">
                      <div className="flex flex-col justify-center items-center">
                        <h3 className="text-sm">
                          <span className="font-semibold"> Position: </span>
                          Software Engineer
                        </h3>
                        <h3 className="text-sm">
                          <span className="font-semibold"> Organization:</span>{" "}
                          Welldev Bangladesh Ltd
                        </h3>
                        <h3 className="text-sm">
                          <span className="font-semibold"> Duration:</span>{" "}
                          November, 2017 - June, 2019
                        </h3>
                      </div>
                      <hr className="bg-gray-400 border-2" />

                      <div className="py-4 text-lg bg-white p-2 rounded-lg my-2">
                        <span className="text-black font-semibold">
                          Team Description:
                        </span>{" "}
                        <div className="text-sm">
                          Worked in API team that integrates APIs of flights,
                          hotels and car rental systems and facilitates full
                          booking flow from search to post booking services.
                          In-house Application team and worldwide various
                          agencies were our API consumer.
                        </div>
                      </div>

                      <div className="py-4 text-lg bg-white p-2 rounded-lg my-2 text-sm">
                        <span className="text-black font-semibold">
                          Description:
                        </span>{" "}
                        <ul className="list-disc ml-4 ">
                          <li>
                            {" "}
                            Working in government projects and developing
                            in-house software for internal use and also for
                            others government body.
                          </li>
                          <li className="mt-1">
                            Also worked as project manager to collaborate with
                            vendors for building large applications which are
                            being used by all the government employees of
                            Bangladesh.
                          </li>
                        </ul>
                      </div>
                      <p className="text-lg bg-white p-2 rounded-lg">
                        <span className="font-bold">Technologies:</span>
                        Rails, RSpec, PostgreSQL
                      </p>
                      <div className="modal-action">
                        <label
                          htmlFor="modal-welldev"
                          className="text-lg font-bold outline outline-0 px-4 py-2 mt-0 rounded content-end bg-[#6ec5e2] cursor-pointer
                  hover:bg-white"
                        >
                          close
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 bg-white outline outline-slate-300 outline-1 rounded-lg p-2 text-xs shadow-md shadow-slate-400">
              <div className="flex flex-nowrap justify-between font-semibold">
                <div>3. Application Development Associate</div>

                <div className="">
                  <span className="text-slate-600 italic">@</span> Accenture
                  Bangladesh Ltd.
                </div>
              </div>
              <div className="mt-2">
                <p>
                  <span className="font-bold">Technologies: </span> Java,
                  Oracle, Javascript
                </p>
              </div>

              {/* modal */}
              {/* The button to open modal */}
              <div className="flex justify-end">
                <label
                  htmlFor="modal-accenture"
                  className="outline outline-0 p-1 mt-1 rounded content-end bg-[#d2d5d6] cursor-pointer
                  hover:bg-white"
                >
                  Details
                </label>
                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="modal-accenture"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box p-2 bg-slate-100">
                    <div className="border-2 border-slate-300 p-2 rounded-lg">
                      <div className="flex flex-col justify-center items-center">
                        <h3 className="text-sm">
                          <span className="font-semibold"> Position: </span>
                          Software Engineer
                        </h3>
                        <h3 className="text-sm">
                          <span className="font-semibold"> Organization:</span>{" "}
                          Welldev Bangladesh Ltd
                        </h3>
                        <h3 className="text-sm">
                          <span className="font-semibold"> Duration:</span>{" "}
                          November, 2017 - June, 2019
                        </h3>
                      </div>
                      <hr className="bg-gray-400 border-2" />

                      <div className="py-4 text-lg bg-white p-2 rounded-lg my-2">
                        <span className="text-black font-semibold">
                          Team Description:
                        </span>{" "}
                        <div className="text-sm">
                          Worked in API team that integrates APIs of flights,
                          hotels and car rental systems and facilitates full
                          booking flow from search to post booking services.
                          In-house Application team and worldwide various
                          agencies were our API consumer.
                        </div>
                      </div>

                      <div className="py-4 text-lg bg-white p-2 rounded-lg my-2 text-sm">
                        <span className="text-black font-semibold">
                          Description:
                        </span>{" "}
                        <ul className="list-disc ml-4 ">
                          <li>
                            {" "}
                            Working in government projects and developing
                            in-house software for internal use and also for
                            others government body.
                          </li>
                          <li className="mt-1">
                            Also worked as project manager to collaborate with
                            vendors for building large applications which are
                            being used by all the government employees of
                            Bangladesh.
                          </li>
                        </ul>
                      </div>
                      <p className="text-lg bg-white p-2 rounded-lg">
                        <span className="font-bold">Technologies:</span>
                        Rails, RSpec, PostgreSQL
                      </p>
                      <div className="modal-action">
                        <label
                          htmlFor="modal-accenture"
                          className="text-lg font-bold outline outline-0 px-4 py-2 mt-0 rounded content-end bg-[#6ec5e2] cursor-pointer
                  hover:bg-white"
                        >
                          close
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

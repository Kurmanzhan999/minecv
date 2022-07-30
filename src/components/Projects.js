import React from 'react';
import pomodoro from '../assets/pomodoro.png';
import bilingual from '../assets/bilingual1.png';
import animationApp from '../assets/animationApp.png';
import landinPage from '../assets/resto.png';
import gpt3 from '../assets/gpt3.png';
import froggy from '../assets/froggy.png';
function Projects() {
  return (
    <div
      name="projects"
      className="bg-[#0a192f] w-full md:h-screen text-gray-500"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-400 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${pomodoro})` }}
            className="shadow-lg shadow-[#FF1493] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pomofocus: React,Redux
              </span>
              <div className="pt-8 text-center">
                <a href="https://kurmanzhan999.github.io/pomofocus/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Kurmanzhan999/pomofocus/tree/feature/pomofocus">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bilingual})` }}
            className="shadow-lg shadow-[#FF1493] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bilingual:(with real back end): React,Redux,Router
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a href="https://github.com/peaksoft-school/bilingual-web">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${animationApp})` }}
            className="shadow-lg shadow-[#FF1493] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React App: Styled components, Framer Motion
              </span>
              <div className="pt-8 text-center">
                <a href="https://kurmanzhan999.github.io/Amazing-React-Project/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Kurmanzhan999/Amazing-React-Project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${gpt3})`,
              objectFit: 'cover',
            }}
            className="shadow-lg shadow-[#FF1493] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Responsive ReactJS website
              </span>
              <div className="pt-8 text-center">
                <a href="https://kurmanzhan999.github.io/Responsive-Modern-UI-UX-Website-in-React-/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Kurmanzhan999/Responsive-Modern-UI-UX-Website-in-React-">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${froggy})`,
              objectFit: 'cover',
            }}
            className="shadow-lg shadow-[#FF1493] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Responsive ReactJS website
              </span>
              <div className="pt-8 text-center">
                <a href="https://kurmanzhan999.github.io/Flexbox-froggy/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Kurmanzhan999/Flexbox-froggy/tree/master">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${landinPage})` }}
            className="shadow-lg shadow-[#FF1493] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Resto:HTML,Css,Js
              </span>
              <div className="pt-8 text-center">
                <a href="https://kurmanzhan999.github.io/Resto/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Kurmanzhan999/Resto">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

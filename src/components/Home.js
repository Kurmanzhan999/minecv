import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#222020] color-wite">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi,my name is</p>
        <h1 className=" text-4xl font-bold text-[#ccc] sm:text-6xl ">
          Kurmanzhan
        </h1>
        <h2 className=" text-4xl font-bold text-[#756c6c] ml-8 sm:text-3.5xl ">
          Frontend developer
        </h2>

        <p className="text-[#605555] py-5 sm:text-2xl max-w-[700px] "></p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-6 flex items-center hover:bg-pink-600">
            <Link to="projects" smooth={true} duration={500}>
              {' '}
              View works{' '}
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-5 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

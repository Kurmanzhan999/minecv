import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-5 my-30">
          <div className="sm:text-center text-3xl font-bold  ">
            <p>Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="first-letter:text-5xl my-1px  ">
              Creative Frontend Developer. Enjoing every step of working process, from discussion
              and collaboration. Self motivated team player with excellent
              interpersonal and communication skills, ability to learn , adapt
              quickly to the emergining new technologies.             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

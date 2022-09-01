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
              Self-motivated front-end developer with an ability to provide
              creative solutions. I have serious passion in converting design
              and ideas to UI and am capable of learning quickly, adapting to
              new technologies. Passionate team player with strong interpersonal
              and communication skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

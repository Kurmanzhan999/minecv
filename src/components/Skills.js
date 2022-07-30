import React from 'react';
import {
  Html,
  Css,
  JavaScript,
  react,
  gitHub,
  toolkit,
  router,
  tailwindCss,
  style,
  jira,
} from './Skilimports';

function Skills() {
  return (
    <div name="skills" className=" w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-gray-400 border-pink-600">
            Skills
          </p>
          <p className="py-6"> These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-8 cursor-pointer">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-900">
            <img className="w-20 mx-auto" src={Html} alt="html" />{' '}
            <p className="py-4"> Html</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img className="w-20 mx-auto" src={Css} alt="html" />{' '}
            <p className="py-4"> Css</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-900">
            <img className="w-20 mx-auto" src={JavaScript} alt="html" />{' '}
            <p className="py-4 hover:bg:red"> JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-900">
            <img className="w-20 mx-auto " src={react} alt="html" />
            <p className="py-4"> React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-900">
            <img className="w-20 mx-auto" src={gitHub} alt="html" />
            <p className="py-4"> Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-900">
            <img className="w-20 mx-auto" src={toolkit} alt="html" />
            <p className="py-4"> Redux-toolkit</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-900">
            <img className="w-20 mx-auto" src={router} alt="html" />
            <p className="py-4"> React-router-dom</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-900">
            <img className="w-20 mx-auto" src={tailwindCss} alt="html" />
            <p className="py-4"> Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-900">
            <img className="w-20 mx-auto" src={style} alt="html" />
            <p className="py-4"> Styled components</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-900">
            <img className="w-20 mx-auto" src={jira} alt="html" />
            <p className="py-4"> Agile Scrum Methodologies</p>
          </div>

          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-900">
            <img className="w-20 mx-auto" src={style} alt="html" />
            <p className="py-4"> Styled components</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;

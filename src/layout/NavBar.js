import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
function NavBar() {
  const [nav, setNav] = useState(false);
  const eventhandler = () => {
    setNav((prev) => !prev);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#0a192f] text-gray-300 ">
      <div>
        <p
          style={{ width: '50px' }}
          className="w-[50px] h-[50px] rounded-[50%] text-pink-600"
        >
          K M
        </p>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {' '}
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          {' '}
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          {' '}
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>
      <div onClick={eventhandler} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text -4xl">
          {' '}
          <Link onClick={eventhandler} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text -4xl">About</li>
        <li className="py-6 text -4xl">
          {' '}
          <Link onClick={eventhandler} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text -4xl">
          <Link
            onClick={eventhandler}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex fixed fixed-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="linkedin.com/in/курманжан-мухтарова-3a5b2022a"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0c0c0c33]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Kurmanzhan999?tab=repositories"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500">
            <p className="flex justify-between items-center w-full text-gray-300">
              Email <HiOutlineMail size={30} />
            </p>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400">
            {/* <a
              className="flex justify-between items-center w-full text-gray-300"
              href="#"
            > */}
            Resume <BsFillPersonLinesFill size={30} />
            {/* </a> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

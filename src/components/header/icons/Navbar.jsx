import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import About from './about';
import Home from './home';
import Project from './project';
import Contact from './contact';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(prev => !prev);
  };

  return (
    <div className="relative md:hidden">
      
      {/* Hamburger icon */}
      <GiHamburgerMenu
        size={30}
        className="cursor-pointer"
        onClick={toggleMenu}
      />

      {/* Menu */}
      {show && (
        <div className="absolute top-8 right-1 p-2 cursor-pointer ">
          <ul className="nav ">
            <li onClick={toggleMenu}><Home /></li>
            <li onClick={toggleMenu}><About /></li>
            <li onClick={toggleMenu}><Project /></li>
            <li onClick={toggleMenu}><Contact /></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

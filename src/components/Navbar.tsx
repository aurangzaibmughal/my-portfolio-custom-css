import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { useState } from 'react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className='container pt-8' data-aos="fade-right">
        <div className='flex justify-between items-center  font-bold'>
        
        
        
            <div className= 'text-3xl font-bold'>AZM</div>
            <ul className='gap-14 lg:gap-10 hidden md:flex text-xl'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#projects'>Project</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contect'>Contact</a></li>
                </ul>
        <div className="md:hidden" onClick={toggleMenu}>
                  
          {isMenuOpen ? <AiOutlineClose size={30} /> :
          <AiOutlineMenu size={30} /> 
          }
        </div>    
        </div>
        {isMenuOpen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden'>
                <li className='menuLink'>
                  <a href='#hero'onClick={toggleMenu}>Home</a></li>
                <li className='menuLink'>
                  <a href='#about'onClick={toggleMenu}>About</a></li>
                <li className='menuLink'>
                  <a href='#projects'onClick={toggleMenu}>Project</a></li>
                <li className='menuLink'>
                  <a href='#skills'onClick={toggleMenu}>Skills</a></li>
                <li className='menuLink'>
                  <a href='#contect'onClick={toggleMenu}>Contact</a></li>
                </ul>
        )

        }    
     </div>
  );
};

export default Navbar
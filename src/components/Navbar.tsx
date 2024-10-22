import React from 'react'
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className='container pt-8' data-aos="fade-right">
        <div className='flex justify-between items-center bg-green-700'>
            <div className= 'text-xl font-bold'>AZM</div>
            <ul className='gap-14 lg:gap-10 hidden md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#projects'>Project</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contect'>Contact</a></li>
                
            </ul>
            <TiThMenuOutline className='mix-blend-plus-darker'size={18} />

            
        </div>    
    
    
    </div>



  )
}

export default Navbar
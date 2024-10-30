import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
  
    <div  data-aos="fade-right" id='hero' className= 'min-h-screen bg-no-repeat bg-[url(/portfoilo.jpg)] bg-cover'
    
    style={{backgroundSize:"35%", backgroundPosition: "left 100px top 200px "}}
    >
      
    
        <Navbar/>
        <div className='contaner grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
            <div className='hidden lg:block'></div>
            <div className='text-[70px] sm:text [90px] font-bold leading-tight flex justify-center items-center '>
                <div>
                  <p data-aos="zoom-in-up">I am</p>
                  <p data-aos="zoom-in-up">Aurangzaib</p>
                  <p data-aos="zoom-in-up">Mughal</p>  
                </div>
            </div>
        </div>
     </div>
   
    



  );
}

export default Hero
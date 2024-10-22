import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { RiCellphoneFill } from "react-icons/ri";


const Contect = () => {
  return (
    <div id='contect' className='pt-32 container'>
        <div className='grid md:-grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'data-aos="zoom-in-up">Get in touch</h2>
                <p className='text-gray-300 -[18px] pt-2'>
                    If you have any questions or need help with something, don't hesitate to reach out.
                </p>
                <div className='flex gap-3 items-center'>
                    <TfiEmail size={28}/>aurangzaib.mughal@gmail.com
                </div>
                <div className='flex gap-3 items-center'>
                <RiCellphoneFill size={28}/> 92-318-2359380
                <RiCellphoneFill size={28}/> 92-307-2816037   
                </div>
        </div>
        <div className='space-y-8'data-aos="zoom-in-up">
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input type='text'  
                className='h=[30px] bg-transparent border border-accent'
                id='name' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <input type='text'  
                className='h=[30px] bg-transparent border border-accent'
                id='email' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='msg'>Message</label>
                <textarea  
                className=' bg-transparent border border-accent'
                id='msg' rows={5} >
                </textarea>
            </div>
            <button className='bg-accent w-20'>Send</button>
        </div>
    </div>    
        
        
    </div>
  )
}
 
export default Contect
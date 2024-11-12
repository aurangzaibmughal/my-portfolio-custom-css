import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { RiCellphoneFill } from "react-icons/ri";
import '../app/styles/contact.css';



const Contact = () => {
  return (
    <div id="contact" className="contact-container">
        <div className="contact-grid md:grid-cols-2">
            <div className='contact-space'>
                <h2 className='contact-heading'data-aos="zoom-in-up">
                    Get in touch</h2>
                <p className='contact-text'>
                    If you have any questions or need help with something dont hesitate to reach out.
                </p>

                <div className='contact-flex' data-aos="zoom-in-up">
                    <TfiEmail size={30}/>aurangzaib.mughal@gmail.com
                </div>
                <div className='contact-flex' data-aos="zoom-in-up">
                <RiCellphoneFill size={30}/> 92-318-2359380
                  
                </div>
        </div>
        <div className='contect-space'>
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor='name'>Name</label>
                <input type='text'  className='input-field' id='name' />
            </div>
            <div className='form'>
                <label htmlFor='email'>Email</label>
                <input type='text'className="input-field" id='email' />
            </div>
            <div className="form" data-aos="zoom-in-up">
                <label htmlFor='msg'>Message</label>
                <textarea  className="textarea-field" id='msg' rows={8}></textarea>
            </div>

            <button className="button" data-aos="zoom-in-up">
                Send
            </button>
        </div>
    </div>    
 </div>
  );
};
 
export default Contact
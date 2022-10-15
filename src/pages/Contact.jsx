import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles/Contact.css';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }

  }
}


const Contact = () => {

  return (

    <>
      <div className="hero hero-bin">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
        </div>
      </div>

      <div className='contact'>

        <div className="contact-content">

          <form >
            <div className='contact-form'>

              <input className="con-input-box" type="text" placeholder='Enter your name' />


              <input className="con-input-box" type="text" placeholder='Enter your email' />


              <input className="con-input-box" type="text" placeholder='Phone Number' />


              <input className="con-input-box" type="text" placeholder='Subject' />

            </div>

            <div>
              <textarea className="message-box" placeholder='Your Message Here...'></textarea>
            </div>


            <div className="con-btn">
              <button > Send Message </button>
            </div>
          </form>

          <p><span className='note'>Note:</span> We promise that we don't do spam & your mail address is confidential.</p>
        </div>

      </div>

    </>
  );
};

export default Contact


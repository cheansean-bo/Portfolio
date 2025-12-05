import React from 'react';
import '../App.css';
import WhiteLine from '../whiteline';
import LinkedIn from '../images/linkedin.png'
import GitHub from '../images/github.png'


function Contact() {
  return (
    <div className='contact'>
        <div className='contactHead'>
            <span>CONTACT ME</span>
            <WhiteLine/>
        </div>
        <div className='contact-form'>
            <span className="contactPara">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm">
                <input type="text" className="contactName" placeholder='Your Name'/>
                <input type="email" className="contactEmail" placeholder='Your Email'/>
                <textarea type="message" rows='5' className="contactMsg" placeholder='Message'/>
                <button className="sendButton">SEND MESSAGES</button>
            </form>
        </div>
        <div className="socials">
            <a href='https://www.linkedin.com/in/cheansean-bo/'>
                <img src={LinkedIn} alt="" className="socialIcon" />
            </a>
            <a href='https://github.com/cheansean-bo'>
                <img src={GitHub} alt="" className="socialIcon" style={{ transform: 'scale(0.85)' }}/>
            </a>
 
        </div>
        
    </div>
  );
}

export default Contact;
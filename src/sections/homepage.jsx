import React from 'react';
import '../App.css';
import Photo from '../images/photo.jpg';
import ResumeImg from '../images/resume.png';
import Resume from '../images/CheanseanBo_Resume.pdf'

function HomePage() {
  return (
    <div className='homepage'>
        <div className='intro'>
            <span className="introHead">HELLO!<br/> I'M <span className="introName">CHEANSEAN BO</span></span>
            <p className='introPara'><br/>A recent computer science graduate, eager to contribute into a software development world.</p>
            <a className="resumeBtn" href={Resume} download='CheanseanBo_Resume.pdf'>         
                <img src={ResumeImg} alt="resumeImg" className="resumeImg"/><span>RESUME</span>
            </a>
        </div>
        <img src={Photo} alt="pfp" className="pfp" />
    </div>
  );
}

export default HomePage;

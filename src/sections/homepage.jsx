import React from 'react';
import '../App.css';
import Photo from '../images/photo.jpg';
import Resume from '../images/resume.png';

function HomePage() {
  return (
    <div className='homepage'>
        <div className='intro'>
            <span className="introHead">HELLO!<br/> I'M <span className="introName">CHEANSEAN BO</span></span>
            <p className='introPara'><br/>A recent computer science graduate, eager to contribute into a software development world.</p>
            <button className="resumeBtn">         
                <img src={Resume} alt="resumeImg" className="resumeImg"/><span>RESUME</span>
            </button>
        </div>
        <img src={Photo} alt="pfp" className="pfp" />
    </div>
  );
}

export default HomePage;

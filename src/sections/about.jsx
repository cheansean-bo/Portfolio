import React from 'react';
import '../App.css'
import Skills from '../skills';
import WhiteLine from '../whiteline';

import LanguagesList from '../languagesList';
import FrameworksList from '../frameworkList';
import OthersList from '../otherList';

function About() {
  return (
    <div className='about'>
        <div className='aboutHead'>
            <span>ABOUT ME<br/></span>
            <WhiteLine/>
            <p className='aboutPara'><br/>Hi! I am Sean. I recently graduated as a Computer Scientist from Deakin University. I am passionate about
            building an application to increase efficiency and solve problems. These are the languages and frameworks that I have learned so far.</p>
        </div>
        <div className='aboutSkills'>
            <p className="subHeader">
              LANGUAGES
            </p>  
            <Skills lists={LanguagesList}/>
        </div>
        <div className='aboutSkills'>
          <p className="subHeader">
              FRAMEWORKS
            </p>  
          <Skills lists={FrameworksList}/>
        </div>
        <div className='aboutSkills'>
          <p className="subHeader">
              OTHERS
            </p>  
          <Skills lists={OthersList}/>
        </div>
    </div>
  );
}

export default About;
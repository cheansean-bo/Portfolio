import React from 'react';
import '../App.css'
import Skills from '../components/skills';
import WhiteLine from '../components/whiteline';

import LanguagesList from '../components/languagesList';
import FrameworksList from '../components/frameworkList';
import OthersList from '../components/otherList';

function About() {
  return (
    <section id="about">
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
    </section>
  );
}

export default About;
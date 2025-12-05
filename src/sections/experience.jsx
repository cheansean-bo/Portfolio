import React, { useState } from 'react';
import '../App.css'
import WhiteLine from '../whiteline';
import ExperiencesList from '../experienceList';
import ExperienceCard from '../experienceCard';

function Experience() {
    const [selectedExp, setSelectedExp] = useState(null);

    return(
      <div className='experience'>
        <div className='experienceHead'>
            <span>WORK EXPERIENCE<br/></span>
            <WhiteLine/>
        </div>

        <div className='aboutExperience'>
          {ExperiencesList.map((props) => (
            <ExperienceCard
              key={props.id}
              img={props.img}
              name={props.name}
              skills={props.skills}
              onReadMore={() => setSelectedExp(props)}
            />
          ))}
        </div>
         {selectedExp && (
          <div className="outsideBox" onClick={() => setSelectedExp(null)}>
            <div className='selectedExp' onClick={(e) => e.stopPropagation()}>
              <button className="closeButton" onClick={() => setSelectedExp(null)}>×</button>
              <img src={selectedExp.img} alt={selectedExp.img} className='selectedImg'></img>
              <p className='experienceName'>{selectedExp.name}</p>
              <div className="bulletPoints">
                <ul className="selectedPoints">
                  {selectedExp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
         )}
    </div>
    )
    

}

export default Experience;

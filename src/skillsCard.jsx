import React from 'react';
import './App.css';

const SkillsCard = ( props ) => {
  return (
    <div className="skillCard">
      <img src={props.img} alt={props.name} className="skillImg" />
      <p className="skillName">{props.name}</p>
    </div>
  );
};

export default SkillsCard;

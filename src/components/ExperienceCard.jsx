import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  return (
    <div className="experienceCard">
      <img src={props.img} alt={props.name} className="experienceImg" />
      <p className="experienceName">{props.name}</p>
      <div className="experienceSkillList">
        {props.skills.map((skill, idx) => (
          <span key={idx} className="experienceSkill">
            {skill}
          </span>
        ))}
      </div>
      <button className="readMore" onClick={props.onReadMore}>
        Read More
      </button>
    </div>
  );
};

export default ExperienceCard;

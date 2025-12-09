import "../components/About.css";
import Skills from "../components/Skills";
import WhiteLine from "../components/whiteline";

import FrameworksList from "../components/frameworkList";
import LanguagesList from "../components/languagesList";
import OthersList from "../components/otherList";

function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="aboutHead">
          <span>
            ABOUT ME
            <br />
          </span>
          <WhiteLine />
          <p className="aboutPara">
            <br />
            Hi! I am Sean — a full-stack developer with experience in building
            automation and data driven solution. I have experience building
            systems using Excel VBA and Python to increase efficiency and
            accuracy.
          </p>
        </div>
        <div className="aboutSkills">
          <p className="subHeader">LANGUAGES</p>
          <Skills lists={LanguagesList} />
        </div>
        <div className="aboutSkills">
          <p className="subHeader">FRAMEWORKS</p>
          <Skills lists={FrameworksList} />
        </div>
        <div className="aboutSkills">
          <p className="subHeader">OTHERS</p>
          <Skills lists={OthersList} />
        </div>
      </div>
    </section>
  );
}

export default About;

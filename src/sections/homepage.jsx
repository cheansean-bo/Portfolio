import "../components/HomePage.css";
import Photo from "../images/photo.jpg";
import ResumeImg from "../images/resume.png";

function HomePage() {
  return (
    <section id="home">
      <div className="homepage">
        <div className="intro">
          <span className="introHead">
            HELLO!
            <br /> I'M <span className="introName">CHEANSEAN BO</span>
          </span>
          <p className="introPara">
            <br />I build efficient, scalable solutions using Javascript and
            Python, specializing in automation and data-driven systems.
          </p>
          <a
            className="resumeBtn"
            href="https://drive.google.com/file/d/1-Gt7gj0KVc6mok1MBWANCyfpczhhMp8z/view?usp=sharing"
          >
            <img src={ResumeImg} alt="resumeImg" className="resumeImg" />
            <span>RESUME</span>
          </a>
        </div>
        <img src={Photo} alt="pfp" className="pfp" />
      </div>
    </section>
  );
}

export default HomePage;

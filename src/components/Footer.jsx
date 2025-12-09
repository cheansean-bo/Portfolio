import GitHub from "../images/github.png";
import Gmail from "../images/gmail.svg";
import LinkedIn from "../images/linkedin.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">Built with React & CSS</div>
      <div className="footerMiddle">
        <a href="https://www.linkedin.com/in/cheansean-bo/">
          <img src={LinkedIn} alt="" className="socialIcon" />
        </a>
        <a href="mailto:bocheansean@gmail.com">
          <img src={Gmail} alt="Email" className="socialIcon" />
        </a>
        <a href="https://github.com/cheansean-bo">
          <img
            src={GitHub}
            alt=""
            className="socialIcon"
            style={{ transform: "scale(0.85)" }}
          />
        </a>
      </div>

      <div className="footerRight">
        <span className="footerCopy">© 2025 Cheansean Bo</span>
        <span className="footerPipe">&nbsp;|&nbsp;</span>
        <span className="footerRights">All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;

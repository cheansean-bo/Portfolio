import { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../App.css";
import Hamburger from "../images/hamburger.svg";
import Logo from "../images/S.png";
import "./NavBar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleNavbar = () => setIsOpen((prev) => !prev);
  const closeNavbar = () => setIsOpen(false);

  useEffect(() => {
    const target = document.documentElement;
    if (isOpen) {
      target.style.overflow = "hidden";
    } else {
      target.style.overflow = "";
    }
    return () => {
      target.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`navbarToggle ${scrolled ? "navbarToggle--scrolled" : ""} ${
          isOpen ? "navbarToggle--hidden" : ""
        }`}
      >
        <button
          type="button"
          className="navToggleOpen"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          aria-hidden={isOpen}
          tabIndex={isOpen ? -1 : 0}
          onClick={toggleNavbar}
        >
          <img src={Hamburger} alt="Open menu" className="navToggleIcon" />
        </button>
      </div>

      <div
        className={`navOverlay ${isOpen ? "show" : ""}`}
        onClick={closeNavbar}
        aria-hidden={!isOpen}
      />

      <Navbar
        fixed="top"
        className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${isOpen ? "show" : ""}`}
      >
        {isOpen && (
          <button
            type="button"
            className="navToggleClose"
            aria-label="Close navigation"
            onClick={closeNavbar}
          >
            ×
          </button>
        )}
        <div className="navHeader">
          <Navbar.Brand
            href="#home"
            className="logoIcon"
            onClick={() => {
              window.scrollTo({ top: 0 });
              closeNavbar();
            }}
          >
            <img src={Logo} alt="Logo" className="logo" />
            <span className="logoName">CHEANSEAN BO</span>
          </Navbar.Brand>
        </div>

        <Navbar.Collapse>
          <Nav className="navbarUl">
            <Nav.Link
              href="#home"
              className="navbarLinks"
              onClick={() => {
                window.scrollTo({ top: 0 });
                closeNavbar();
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="navbarLinks"
              onClick={closeNavbar}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className="navbarLinks"
              onClick={closeNavbar}
            >
              EXPERIENCE
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="navbarLinks"
              onClick={closeNavbar}
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;

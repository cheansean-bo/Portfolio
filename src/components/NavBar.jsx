import React, { useEffect, useState } from 'react';
import '../App.css'
import Logo from '../images/S.png'
import {Navbar, Nav} from 'react-bootstrap';


function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (

    <Navbar
      
      fixed="top"
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
    >     
      <Navbar.Brand href="#home" className="logoIcon" onClick={() => window.scrollTo({top: 0})}>
        <img src={Logo} alt="Logo" className="logo" />
        <span className="logoName">CHEANSEAN BO</span>
      </Navbar.Brand>

      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="navbarLinks" onClick={() => window.scrollTo({top: 0})}>HOME</Nav.Link>
          <Nav.Link href="#about" className="navbarLinks">ABOUT</Nav.Link>
          <Nav.Link href="#experience" className="navbarLinks">EXPERIENCE</Nav.Link>
          <Nav.Link href="#contact" className="navbarLinks">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
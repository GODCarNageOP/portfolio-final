import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import code from "../assets/img/code.png";
import fiver from '../assets/img/fiverr.svg';
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/nav-icon1.svg';
// import contra from '../assets/img/contra2.png';

export const Main = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
         <img src={code} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            {/*<Nav.Link
              href="#certificates"
              className={
                activeLink === "certificates"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("certificates")}
            >
              Certificates
            </Nav.Link>*/}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={fiver} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/yash-harale-682927218">
                <img src={linkedin} alt="Icon" />
              </a>
              <a href="https://github.com/GODCarNageOP"><img src={github} alt="Icon" /></a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Lets Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
import { Container, Row, Col } from "react-bootstrap";
import fiver from '../assets/img/fiverr.svg';
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/nav-icon1.svg';
// import contra from '../assets/img/contra2.png';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="back" id="bg">
        <Row className="align-items-center">
          <Col size={12} sm={6}>
           {/* <img src={contra} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={fiver} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/yash-harale-682927218">
                <img src={linkedin} alt="Icon" />
              </a>
              <a href="#"><img src={github} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

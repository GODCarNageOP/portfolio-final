import { Container, Row, Col } from "react-bootstrap";
import youtube from '../assets/img/youtube.svg';
import instagram from "../assets/img/nav-icon3.svg";
import whatsApp from "../assets/img/whatsapp.svg";
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
            <a href="https://wa.me/+918104799731">
                <img src={whatsApp} alt="" />
              </a>
              <a href="https://youtube.com/@carnageitself">
                <img src={youtube} alt="" />
              </a>
              <a href="https://instagram.com/carnageitself?igshid=Yzg5MTU1MDY=">
                <img src={instagram} alt="" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

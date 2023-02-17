import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import webdeveloper from "../assets/img/webdevelopment.png";
import apideveloper from "../assets/img/apidevelopment.png";
import appdeveloper from "../assets/img/appdevelopment.png";
import googledeveloper from "../assets/img/google developer.png";
import chatbot from "../assets/img/chatbot.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import bootstrap from "../assets/img/bootstrap.png";
import tailwindcss from "../assets/img/tailwindcss.png";
import react from "../assets/img/react.png";
import node from "../assets/img/node.png";
import vite from "../assets/img/vite.png";
import three from "../assets/img/three.png";
import express from "../assets/img/express.png";
import gfx from "../assets/img/gfx.png";
import vfx from "../assets/img/vfx.png";
import premeirepro from "../assets/img/premierepro.png";
import aftereffects from "../assets/img/aftereffects.png";
import pstouch from "../assets/img/pstouch.png";
import alightmotion from "../assets/img/alightmotion.png";
import kinemaster from "../assets/img/kinemaster.png";
import pixellab from "../assets/img/pixellab.png";
import digitalmarketing from "../assets/img/digitalmarketing.png";
import seo from "../assets/img/seo.png";
import eventmanagement from "../assets/img/eventmanagement.png";
import copywriting from "../assets/img/copywriting.png";
import twrp from "../assets/img/twrp.png";
import orangefox from "../assets/img/orangefox.png";
import ethicalhacking from "../assets/img/ethicalhacking.png";
import contentcreation from "../assets/img/contentcreation.png";
import ytstreaming from "../assets/img/ytstreaming.png";
import ytcasting from "../assets/img/ytcasting.png";
import freelancing from "../assets/img/freelancing.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                These are some skills I have developed throughout my career.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={webdeveloper} alt="Img" />
                  <h5>Web Developer</h5>
                </div>

                <div className="item">
                  <img src={apideveloper} alt="Img" />
                  <h5>API Developer</h5>
                </div>

                <div className="item">
                  <img src={appdeveloper} alt="Img" />
                  <h5>App Developer</h5>
                </div>

                <div className="item">
                  <img src={chatbot} alt="Img" />
                  <h5>Virtual Assistant Developer</h5>
                </div>

                <div className="item">
                  <img src={googledeveloper} alt="Img" />
                  <h5>Google Developer</h5>
                </div>

                <div className="item">
                  <img src={html} alt="Img" />
                  <h5>HTML</h5>
                </div>

                <div className="item">
                  <img src={css} alt="Img" />
                  <h5>CSS</h5>
                </div>

                <div className="item">
                  <img src={javascript} alt="Img" />
                  <h5>Javascript</h5>
                </div>

                <div className="item">
                  <img src={bootstrap} alt="Img" />
                  <h5>Bootstrap 5</h5>
                </div>

                <div className="item">
                  <img src={tailwindcss} alt="Img" />
                  <h5>Tailwind CSS</h5>
                </div>

                <div className="item">
                  <img src={react} alt="Img" />
                  <h5>React Javascript</h5>
                </div>

                <div className="item">
                  <img src={node} alt="Img" />
                  <h5>Node Javascript</h5>
                </div>

                <div className="item">
                  <img src={vite} alt="Img" />
                  <h5>Vite Javascript</h5>
                </div>

                <div className="item">
                  <img src={three} alt="Img" />
                  <h5>Three Javascript</h5>
                </div>

                <div className="item">
                  <img src={express} alt="Img" />
                  <h5>Express Javascript</h5>
                </div>

                <div className="item">
                  <img src={gfx} alt="Img" />
                  <h5>GFX Artist</h5>
                </div>

                <div className="item">
                  <img src={vfx} alt="Img" />
                  <h5>VFX Artist</h5>
                </div>

                <div className="item">
                  <img src={premeirepro} alt="Img" />
                  <h5>Premiere Pro</h5>
                </div>

                <div className="item">
                  <img src={aftereffects} alt="Img" />
                  <h5>After Effects</h5>
                </div>

                <div className="item">
                  <img src={pstouch} alt="Img" />
                  <h5>Photoshop</h5>
                </div>

                <div className="item">
                  <img src={alightmotion} alt="Img" />
                  <h5>Alight Motion</h5>
                </div>

                <div className="item">
                  <img src={kinemaster} alt="Img" />
                  <h5>Kinemaster</h5>
                </div>

                <div className="item">
                  <img src={pixellab} alt="Img" />
                  <h5>Pixel Lab</h5>
                </div>

                <div className="item">
                  <img src={digitalmarketing} alt="Img" />
                  <h5>Digital Marketing</h5>
                </div>

                <div className="item">
                  <img src={seo} alt="Img" />
                  <h5>Search Engine Optimization</h5>
                </div>

                <div className="item">
                  <img src={eventmanagement} alt="Img" />
                  <h5>Event Management</h5>
                </div>

                <div className="item">
                  <img src={copywriting} alt="Img" />
                  <h5>Copywriting</h5>
                </div>

                <div className="item">
                  <img src={twrp} alt="Img" />
                  <h5>TWRP Recovery</h5>
                </div>

                <div className="item">
                  <img src={orangefox} alt="Img" />
                  <h5>OrangeFox Recovery</h5>
                </div>

                <div className="item">
                  <img src={ethicalhacking} alt="Img" />
                  <h5>Ethical Hacking</h5>
                </div>

                <div className="item">
                  <img src={contentcreation} alt="Img" />
                  <h5>Content Creation</h5>
                </div>

                <div className="item">
                  <img src={ytstreaming} alt="Img" />
                  <h5>Youtube Streaming</h5>
                </div>

                <div className="item">
                  <img src={ytcasting} alt="Img" />
                  <h5>Youtube Casting</h5>
                </div>

                <div className="item">
                  <img src={freelancing} alt="Img" />
                  <h5>Freelancer</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

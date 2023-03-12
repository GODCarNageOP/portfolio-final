import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import weatherApp from "../assets/img/weatherapp.png";
import youtubeApp from "../assets/img/youtubeapp.png";
import earth from "../assets/img/earth.png";
import cryptoTracker from "../assets/img/cryptotracker.png";
import chatgpt from "../assets/img/chatgpt.png";
import docs from "../assets/img/docs.png";

const Projects = () => {

    const projects = [
        {
          title: "ChatGPT 2.0",
          description: "Advance ChatGPT which works on voice assistant.",
          imgUrl: chatgpt,
        },
        {
          title: "Weather App",
          description: "Weather analysis based on live location.",
          imgUrl: weatherApp,
        },
        {
          title: "Youtube 2.0",
          description: "Advance Youtube clone",
          imgUrl: youtubeApp,
        },
        {
          title: "Crypto Tracker",
          description: "Cryptocurrency Tracker.",
          imgUrl: cryptoTracker,
        },
        {
          title: "Google Docs",
          description: "Live Google Docs clone.",
          imgUrl: docs,
        },
        {
          title: "3D Earth",
          description: "3D Earth with 3D Sun & Moon.",
          imgUrl: earth,
        },
      ];

    return ( 
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Let our advance worrying become advance thinking and planning.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"><p></p></Tab.Pane>
                    <Tab.Pane eventKey="third"><p></p></Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
           
        </section>
    );
}
 
export default Projects;
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1 - Copy.png";
import projImg2 from "../assets/img/project-2 - Copy.png";
import projImg3 from "../assets/img/project-3 - Copy.png";
import projImg4 from "../assets/img/project-4 - Copy.png";
import projImg5 from "../assets/img/project-5 - Copy.png";
import projImg6 from "../assets/img/project-6 - Copy.png";
import projImg7 from "../assets/img/project-7.png";
import projImg8 from "../assets/img/project-8.png";
import projImg9 from "../assets/img/project-9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Food Shop Website",
      description: "Html,Css and Javascript",
      imgUrl: projImg1,
    },
    {
      title: "Book Shop Website",
      description: "Html,Css and Javascript",
      imgUrl: projImg2,
    },
    {
      title: "Travel Website",
      description: "Html,Css and Javascript",
      imgUrl: projImg3,
    },
    {
      title: "Coffee Shop Website",
      description: "Html,Css and Javascript",
      imgUrl: projImg4,
    },
    {
      title: "Shopping Website",
      description: "Html,Css and Javascript",
      imgUrl: projImg5,
    },
    {
      title: "Business Website",
      description: "Html,Css and Javascript",
      imgUrl: projImg6,
    },
    
    
  ];

  const projects2 = [
    {
      title: "Flower Shop Website",
      description: "Html,Css and Javascript",
      imgUrl: projImg7,
    },
    {
      title: "Architecture & Interior Design Website",
      description: "Html,Css and Javascript",
      imgUrl: projImg8,
    },
    {
      title: "Education Website",
      description: "Html,Css and Javascript",
      imgUrl: projImg9,
    },

  
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

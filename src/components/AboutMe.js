import React from 'react'
import { Container, Row, Col, Tab, Nav, ListGroup, ListGroupItem } from "react-bootstrap";
import AboutUs from "../assets/img/about-us.webp";
import { HashLink } from 'react-router-hash-link';


function AboutMe() {
  return (
    <div>
        <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
             <img src={AboutUs}/>
          </Col>
          <Col size={12} md={6} style={{ fontSize: 20 + 'px' }}>

            <ListGroup>
              <ListGroupItem className='mb-2'>Name - Aung Kaung Myint Mo</ListGroupItem>
              <ListGroupItem className='mb-2'>Phone Number - 09774025700</ListGroupItem>
              <ListGroupItem className='mb-2'>Email - akmm3131@gmail.com</ListGroupItem>
            </ListGroup>

            <span>
                  Hi Everyone , 
                  Let me introduce myself . I am Aung Kaung Myint Mo .  I am a web developer. I want to be a Full stack developer. 
                  I am almost best at HTML,CSS,Bootstrap,JavaScript,PHP,Laravel and NodeJs. 
                  Now I am studying about Database Design of Web Development and trying to share about my knowledge of web developing to everyone who are interesting in Web Development.
            </span>
        
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default AboutMe

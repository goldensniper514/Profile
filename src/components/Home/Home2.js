import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myphoto.jpg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "whitesmoke" }}>
              Professional <span className="purple"> Summary </span>
            </h1>
            <p className="home-about-body">
              Professional Summary:
              I'm a Full-Stack Software Engineer with experience in Blockchain and AI. I build web apps, smart contracts, and AI tools using React, Node.js, Python, and Solidity. I enjoy creating easy-to-use, reliable, and scalable solutions for both Web2 and Web3 projects.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="home-profile-image" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

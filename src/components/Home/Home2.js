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
            <h1 style={{ fontSize: "2.6em", color:"whitesmoke" }}>
            Professional <span className="purple"> Summary </span>
            </h1>
            <p className="home-about-body">
  <br />
  <br />Balar Mountie is Senior Full-Stack Blockchain Developer & AI Engineer,  experienced in the
  <i>
    <b className="purple"> Senior Full-Stack Blockchain Developer </b>
  </i>
  <br />
  
  <br />
  With hands-on experience in building, deploying and managing web applications using AWS services like
  <i>
    <b className="purple"> Blockchain, </b>
  </i>
   he has expertise in
  <i>
    <b className="purple"> AI Engineer. </b>
  </i>
  {/* and */}
  {/* <i>
    <b className="purple"> AWS Solution Architect Associate. </b>
  </i> */}
  <br />
  <br />
  Balar is passionate about leveraging cloud technologies to build scalable and efficient serverless solutions.
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

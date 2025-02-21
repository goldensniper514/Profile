import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
       <Row>
          <Col md={12} className="home-about-social" >
          <h1 style={{color:"whitesmoke"}}>Let's Contact me!</h1>
<p>
  Feel free to <span className="purple">reach out</span>
</p>
<ul className="home-about-social-links">
  <li className="social-icons">
    <a
      href="https://github.com/codingfaster/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillGithub />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://twitter.com/codingfaster/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiOutlineTwitter />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://t.me/codingfaster"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <FaLinkedinIn />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://t.me/codingfaster"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiOutlineMail />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://t.me/codingfaster"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiOutlineMail />
    </a>
  </li>
</ul>

          </Col>
        </Row>
      <Row>
        <Col md="4" className="footer-copywright">
          
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} 2025</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

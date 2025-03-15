import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
  AiFillLinkedin,
  
} from "react-icons/ai";
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
      href="https://github.com/angrybee7/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillGithub />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://x.com/goldensniper514/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiOutlineTwitter />
    </a>
  </li>
  <li className="social-icons">
    {/* <a
      href="https://t.me/goldensniper514"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <FaTelegram />
    </a> */}
  </li>
  <li className="social-icons">
    <a
      href="https://discord.gg/balarmountie"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillLinkedin />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="mountiebalar@gmail.com"
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

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Balar Mountie</span>, experienced IT and Software Development
            professional with over 10 years in the
            industry, specializing in the Solidity, Rust,
            Java, Python, Nodejs and adept at
            delivering robust solution for large enterprises.
            <br />
            <br />
            Proven expertise spans system
            analysis, technical leadership, and project
            management, with a focus on developing
            decentralized applications on various
            blockchain networks (including Ethereum,
            Binance Smart Chain, Polygon, Solana,
            CosmWasm and TON) .
            <br />
            <br />
            Throughout my career, I've gained hands-on experience with a range of technologies, including JavaScript, Angular, React, Node.js, MySQL, MongoDB, and AWS Cloud.
            <br />
            <br />
            Proficient in data
            migration, technical documentation, UML
            designing, application architecture, and
            well-versed in Agile practices, test-driven
            development, and software engineering
            design patterns, holding certifications as a
            Microsoft Certified Professional Developer
            (
            MCPD) and Microsoft Certified Technology
            Specialist ( MCTS) .
            <br />

            <br />
            Beyond my professional life, I am passionate about yoga, reading books, exploring new places, and traveling.
            <br />
            <br />
            As I continue to evolve in my career, my short term goal is to transition fully into a Cloud Solution Architect role, designing impactful cloud solutions that solve real-world problems.
          </p>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Designing impactful cloud solutions that solve real-world problems."
          </p> */}
          {/* <footer className="blockquote-footer">Rahul Bhatija</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

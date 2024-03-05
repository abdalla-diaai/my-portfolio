import React from "react";
import Container from "react-bootstrap/Container";
import headshot from "../../assets/headshot.jpg";
import "./styles.css";

export default function Home() {
  return (
    <div id="home" className="container">
      <img id="headshot-img" src={headshot} alt="" />
      <h1 className="display-4">
        Hi there, I am <strong>Abdalla Diaai</strong>....
      </h1>
      <p className="lead">
        I am passionate about solving problems that face scientists in
        scientific research through developing user friendly{" "}
        <b>web based tools</b> that can facilitate experimental design and
        improve efficiency. If you have an idea or need help with a project,
        drop me a message.
      </p>
      <p className="lead">
        <a
          className="btn btn-primary btn-sm home-btn"
          href="https://www.linkedin.com/in/abdalla-diaai-mohamed-434096218/"
          role="button"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          className="btn btn-dark btn-sm home-btn"
          href="https://github.com/abdalla-diaai"
          role="button"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          className="btn btn-secondary btn-sm home-btn"
          href="mailto:abdalla.diaai@outlook.com"
          role="button"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
      </p>
    </div>
  );
}

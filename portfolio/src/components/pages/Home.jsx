import React from "react";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container>
      <h1 className="display-4">Hi there, I am Abdalla Diaai!</h1>
      <p className="lead">
        I am passionate about solving problems that face scientists in the laboratory through developing user friendly tools that minize waste and improve efficiency. 
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-sm" href="#" role="button">
        <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a className="btn btn-dark btn-sm" href="#" role="button">
        <i class="fa-brands fa-github"></i>
        </a>
      </p>
      
    </Container>
  );
}

import React from "react";
import logo from "../assets/letter-a.png";

export default function Footer() {
  return (
    <div id="footer" className="container d-flex">
      <div className="row">
        <div className="col">
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
        </div>
      </div>
    </div>
  );
}

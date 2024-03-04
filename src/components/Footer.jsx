import React from "react";
import logo from "../assets/letter-a.png";

export default function Footer() {
  return (
    <div id="footer" className="container">
      <div className="row">
        <div className="col-lg-4 col-md-5 col-sm-12 footer-cols footer-heading">
        <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          /><span className="logo-name">bdalla</span>
          <p id="contact-me">
            <i className="fa-solid fa-envelope" />{" "}
            <a href="mailto:hello@tuxedo.com" id="email">
              abdalla.diaai@outlook.com
            </a>
            <br />
            <i className="fa-solid fa-phone" /> +44 (0)7507 16808
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 d-none d-sm-block footer-cols">
          <div className="footer-heading">
            <h6>Address</h6>
          </div>
          <address>
            <i className="fa-solid fa-location-dot" /> 4 Privet Drive, Little
            Whinging
            <br />
            Surrey
            <br />
            WD25 7LR
            <br />
            United Kingdom
          </address>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-12 footer-cols">
          <div className="footer-heading">
            <h6>Follow us</h6>
          </div>
          <ul className="nav" id="social-icons">
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/abdalla-diaai-mohamed-434096218/"
                className="nav-link"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/abdalla-diaai" className="nav-link">
                <i className="fa-brands fa-github fa-lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project Title:</strong> {props.title}
          </li>
          <li>
            <a
              className="btn btn-dark btn-sm home-btn"
              href={props.repoUrl}
              role="button"
            >
              GitHub Repository
            </a>
            <a
              className="btn btn-dark btn-sm home-btn"
              href={props.pageUrl}
              role="button"
            >
              {props.title} Page
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

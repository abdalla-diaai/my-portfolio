import React from "react";

export default function Project(props) {
  return (
    <div className="row">
      <div className="card text-center">
        <img className="project-image" alt={props.name} src={props.image} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a
            className="btn btn-dark btn-sm home-btn"
            href={props.repoUrl}
            role="button"
          >
            GitHub
          </a>
          <a
            className="btn btn-info btn-sm home-btn"
            href={props.pageUrl}
            role="button"
          >
            Go To Website
          </a>
        </div>
      </div>
    </div>
  );
}

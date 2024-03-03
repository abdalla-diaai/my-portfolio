import React from "react";

export default function Project(props) {
  return (
    <div className="card">
      <img className="project-image" alt={props.name} src={props.image} />
      <div className="card-body">
        <h5 clasName="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
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
      </div>
    </div>
  );
}

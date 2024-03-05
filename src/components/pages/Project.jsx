import React from "react";
import "./styles.css";

export default function Project({title, image, description, repoUrl, pageUrl}) {
  return (
    <div className="row">
      <div className="card text-center">
        <img className="project-image" alt={title} src={image} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            className="btn btn-dark btn-sm home-btn"
            href={repoUrl}
            role="button"
          >
            GitHub
          </a>
          <a
            className="btn btn-info btn-sm home-btn"
            href={pageUrl}
            role="button"
          >
            Go To Website
          </a>
        </div>
      </div>
    </div>
  );
}

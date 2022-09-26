import React from 'react';

function Project(props) {
  // destructure project data from props
  const { 
    title, 
    id, 
    subtitle, 
    description, 
    deployed, 
    repo 
  } = props;
  
  return(
    // section for Project component
    // create a card for each project and insert project data into card.
    <div className="col">
      <div className="card h-100 border border-2 shadow">
        {/* project image */}
        <img 
          src={require(`../../assets/images/${id}.png`)}
          className="card-img-top" 
          alt={title}
        />
        <div className="card-header">
          {/* project title */}
          <h4 className="card-title text-white">{title}</h4>
          {/* project subtitle */}
          <h6 className="card-subtitle cm-font-family">{subtitle}</h6>
        </div>
        <div className="card-body">
          {/* project description */}
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          {/* link to deployed application */}
          <a href={deployed} className="btn text-white cm-button-color rounded-pill">Visit Website</a>
          {/* link to github repository */}
          <a href={repo} className="fs-2 cm-primary-color">
            <i className="bi bi-github "></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
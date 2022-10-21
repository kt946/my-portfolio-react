import React from 'react';

function Project({ project }) {
  // destructure project data from props
  const { 
    title, 
    image, 
    technology, 
    description, 
    deployed, 
    repo 
  } = project;
  
  return(
    // section for Project component
    // create a card for each project and insert project data into card.
    <div className="col">
      <div className="card h-100 shadow border-primary">
        {/* project image */}
        <a 
          href={deployed}
          className="card-top"
        >
          <img 
            src={require(`../../assets/images/${image}`)}
            className="card-img-top" 
            alt={`Screenshot of ${title}`}
          />
        </a>
        <div className="card-header bg-primary">
          {/* project title */}
          <h2 className="card-title cm-font-heading fs-4 my-1">{title}</h2>
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          {/* project description */}
          <p className="card-text custom-text-color">{description}</p>
          <div>
            <hr />
            {/* project technologies */}
            <h3 className="card-text cm-font-heading fs-6">Technologies Used:</h3>
            <p className="card-text custom-text-color">{technology}</p>
          </div>
        </div>
        <div className="card-footer bg-primary d-flex justify-content-between align-items-center">
          {/* link to deployed application */}
          <a href={deployed} className="btn custom-btn rounded-pill">Visit Website</a>
          {/* link to github repository */}
          <a href={repo} className="icon-btn fs-1 text-white">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
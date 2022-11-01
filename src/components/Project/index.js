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
      <div className="card h-100 shadow">
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
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            {/* project title */}
            <h2 className="card-title fs-4 fw-bold">{title}</h2>
            {/* project description */}
            <p className="card-text custom-text-color mb-0 body-text">{description}</p>
          </div>
          <div>
            <hr className="text-info opacity-100"/>
            {/* project technologies */}
            <h3 className="card-text fs-6">Technologies Used:</h3>
            <p className="card-text custom-text-color body-text">{technology}</p>
          </div>
        </div>
        <div className="px-3 pb-3 d-flex justify-content-between align-items-center">
          {/* link to deployed application */}
          <a href={deployed} className="btn btn-outline-info fw-bold rounded-pill">View Project</a>
          {/* link to github repository */}
          <a href={repo} className="btn btn-outline-info fw-bold rounded-pill">
            <i className="bi bi-github"></i> Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
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
      <div className="card h-100 border border-2 border-primary shadow">
        {/* project image */}
        <a 
          href={deployed}
          className="card-top"
        >
          <img 
            src={require(`../../assets/images/${id}.png`)}
            className="card-img-top" 
            alt={`Screenshot of ${title}`}
          />
        </a>
        <div className="card-header bg-primary">
          {/* project title */}
          <h4 className="card-title my-1 text-white">{title}</h4>
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          {/* project description */}
          <p className="card-text">{description}</p>
          <div>
            <hr />
            {/* project technologies */}
            <h6 className="card-text cm-font-family">Technologies Used:</h6>
            <p className="card-text cm-font-family">{subtitle}</p>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          {/* link to deployed application */}
          <a href={deployed} className="btn btn-primary rounded-pill">Visit Website</a>
          {/* link to github repository */}
          <a href={repo} className="fs-2 text-primary">
            <i className="bi bi-github "></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
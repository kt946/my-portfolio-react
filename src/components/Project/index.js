import React from 'react';

function Project(props) {
  // array for projects from props
  const { projects = [] } = props;
  
  return(
    // section for Project component
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 animate__animated animate__fadeIn animate__delay-1s">
      {/* map array of projects */}
      {projects.map((project) => (
        <div 
          className="col"
          key={project.id}
        >
          <div className="card h-100 border border-2 shadow">
            {/* project image */}
            <img 
              src={require(`../../assets/images/${project.id}.png`)}
              className="card-img-top" 
              alt={project.title}
            />
            <div className="card-header">
              {/* project title */}
              <h4 className="card-title text-white">{project.title}</h4>
              {/* project subtitle */}
              <h6 className="card-subtitle cm-font-family">{project.subtitle}</h6>
            </div>
            <div className="card-body">
              {/* project description */}
              <p className="card-text">{project.description}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              {/* link to deployed application */}
              <a href={project.deployed} className="btn text-white cm-button-color rounded-pill">Visit Website</a>
              {/* link to github repository */}
              <a href={project.repo} className="fs-2 cm-primary-color">
                <i className="bi bi-github "></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
import React from 'react';

function Project(props) {
  const { projects = [] } = props;
  
  return(
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 animate__animated animate__fadeIn animate__delay-1s">
      {projects.map((project) => (
        <div 
          className="col"
          key={project.id}
        >
          <div className="card h-100 border border-2 shadow">
            <img 
              src={require(`../../assets/images/${project.id}.png`)}
              className="card-img-top" 
              alt={project.title}
            />
            <div className="card-header">
              <h4 className="card-title text-white">{project.title}</h4>
              <h6 className="card-subtitle cm-font-family">{project.subtitle}</h6>
            </div>
            <div className="card-body">
              <p className="card-text">{project.description}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <a href={project.deployed} className="btn text-white cm-button-color rounded-pill">Visit Website</a>
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
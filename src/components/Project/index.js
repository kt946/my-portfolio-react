import React from 'react';

function Project(props) {
  const { projects = [] } = props;
  
  return(
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {projects.map((project) => (
        <div 
          className="col"
          key={project.id}
        >
          <div className="card h-100 border-dark shadow">
            <img 
              src={require(`../../assets/images/${project.id}.png`)}
              className="card-img-top border-bottom" 
              alt={project.title}
            />
            <div className="card-header">
              <h4 className="card-title">{project.title}</h4>
              <h6 className="card-subtitle text-muted">{project.subtitle}</h6>
            </div>
            <div className="card-body">
              <p className="card-text">{project.description}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <a href={project.deployed} className="btn btn-primary">Visit Website</a>
              <a href={project.repo} className="fs-2">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
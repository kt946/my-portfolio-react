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
          <div className="card h-100 border-dark shadow-sm">
            <img 
              src={require(`../../assets/images/${project.id}.png`)}
              className="card-img-top border-bottom" 
              alt={project.title}
            />
            <div className="card-body">
              <h4 className="card-title">{project.title}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">{project.description}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href={project.deployed} className="btn btn-primary">Deployed App</a>
              <a href={project.repo} className="btn btn-success">GitHub Repository</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
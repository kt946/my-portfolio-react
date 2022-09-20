import React from 'react';

function Resume() {
  const frontEndSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'Responsive Design',
    'React',
    'Bootstrap'
  ];

  const backEndSkills = [
    'APIs',
    'Node',
    'Express',
    'MySQL, Sequelize',
    'MongoDb, Mongoose',
    'REST'
  ];

  return(
    <section id="resume" className="py-4 custom-bg-color custom-height">
      <div className="container pb-4">
        <h2 className="section-title text-center border-bottom border-primary border-2 pb-2 mb-4">
          Resume
        </h2>
        <div className="d-flex justify-content-center">
          <a 
            href="/" 
            className="btn btn-primary btn-lg rounded-pill"
          >
            Download resume
          </a>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4 my-2">
          <div className="col">
            <div className="card shadow">
              <div className="card-header text-center fs-5">
                Front-end Proficiencies
              </div>
              <ul className="list-group list-group-flush">
                {frontEndSkills.map(skill => (
                  <li 
                    key={skill}
                    className="list-group-item"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <div className="card-header text-center fs-5">
                Back-end Proficiencies
              </div>
              <ul className="list-group list-group-flush">
                {backEndSkills.map(skill => (
                  <li 
                    key={skill}
                    className="list-group-item"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
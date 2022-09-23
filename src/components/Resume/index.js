import React from 'react';

function Resume() {
  const frontEndSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'Responsive Design',
    'DOM API',
    'Bootstrap',
    'Bulma',
    'React'
  ];

  const backEndSkills = [
    'AJAX',
    'APIs',
    'Node',
    'Object-Oriented Programming (OOP)',
    'Express',
    'REST',
    'SQL, MySQL, Sequelize',
    'Object-Relational Mapping (ORM)',
    'Model-View-Controller (MVC)',
    'Handlebars',
    'NoSQL, MongoDb, Mongoose',
    'MERN',
    'GitHub',
    'Heroku',
  ];

  return(
    <section id="resume" className="py-4 custom-bg-color custom-height">
      <div className="container pb-4">
        <h2 className="section-title text-center border-bottom border-2 pb-2 mb-4">
          Resume
        </h2>
        <p className="fs-4 text-center mb-4 cm-font-heading">
          Thanks for visiting! Check out my resume and the skills I've picked up during my journey as a developer.
        </p>
        <div className="d-flex justify-content-center">
          <a 
            href="https://drive.google.com/file/d/1r3HfYnQr1qtijQ7Kv8SudnAkat5uMETE/view?usp=sharing" 
            className="btn text-white cm-button-color btn-lg rounded-pill"
          >
            Download resume
          </a>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center align-items-md-start mt-4">
          <div className="card shadow skill-card mb-4">
            <div className="card-header text-center custom-color fs-4 py-3">
              Front-end Proficiencies
            </div>
            <ul className="list-group list-group-flush text-center">
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
          <div className="card shadow skill-card">
            <div className="card-header text-center custom-color fs-4 py-3">
              Back-end Proficiencies
            </div>
            <ul className="list-group list-group-flush text-center">
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
    </section>
  );
}

export default Resume;
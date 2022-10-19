import React from 'react';

function Resume() {
  // array of front-end skills
  const frontEndSkills = [
    'HTML5',
    'CSS3',
    'JavaScript ES6+',
    'jQuery',
    'Responsive Design',
    'DOM API',
    'Bootstrap',
    'Bulma',
    'React'
  ];

  // array of back-end skills
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
    // section for Resume component
    <section id="resume" className="py-4 custom-bg-color custom-height text-white">
      <div className="container pb-4">
        <h2 className="section-title text-center border-bottom border-3 pb-2 mb-4 animate__animated animate__fadeIn animate__faster">
          Resume
        </h2>
        <p className="fs-3 text-center mb-4 cm-font-heading animate__animated animate__fadeInDown">
          Thanks for visiting! Check out my resume and the skills I've picked up during my journey.
        </p>
        <div className="d-flex mb-4 justify-content-center animate__animated animate__fadeIn animate__delay-1s">
          {/* button for downloading resume */}
          <a 
            href="https://drive.google.com/file/d/1r3HfYnQr1qtijQ7Kv8SudnAkat5uMETE/view?usp=sharing" 
            className="btn custom-btn btn-lg rounded-pill"
          >
            Download resume
          </a>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center align-items-md-start animate__animated animate__fadeIn animate__delay-1s">
          {/* card for displaying front-end skills */}
          <div className="card shadow skill-card mb-4">
            <div className="card-header text-center text-white bg-primary fs-4 py-3">
              Front-end Proficiencies
            </div>
            <ul className="list-group list-group-flush text-center">
              {/* map array of front-end skills */}
              {frontEndSkills.map(skill => (
                <li 
                  key={skill}
                  className="list-group-item custom-text-color"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          {/* card for displaying back-end skills */}
          <div className="card shadow skill-card">
            <div className="card-header text-center text-white bg-primary fs-4 py-3">
              Back-end Proficiencies
            </div>
            <ul className="list-group list-group-flush text-center">
              {/* map array of back-end skills */}
              {backEndSkills.map(skill => (
                <li 
                  key={skill}
                  className="list-group-item custom-text-color"
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
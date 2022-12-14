import React from 'react';

function Resume() {
  // array of front-end skills
  const frontEndSkills = [
    'HTML5',
    'CSS3',
    'JavaScript ES6',
    'jQuery',
    'Responsive Design',
    'DOM API',
    'Bootstrap',
    'Bulma',
    'React',
    'Redux'
  ];

  // array of back-end skills
  const backEndSkills = [
    'Git',
    'Github',
    'AJAX',
    'Third-party APIs',
    'Node',
    'Object-Oriented Programming (OOP)',
    'Express',
    'REST API',
    'SQL, MySQL, Sequelize',
    'Object-Relational Mapping (ORM)',
    'Model-View-Controller (MVC)',
    'Handlebars',
    'NoSQL, MongoDB, Mongoose',
    'MERN',
  ];

  return(
    // section for Resume component
    <section id="resume" className="container py-4 custom-height text-white">
      <h1 className="section-title text-center pb-2 mb-4 animate__animated animate__fadeIn">
        Resume
      </h1>
      <h2 className="fs-4 fw-bold text-center mb-4 animate__animated animate__fadeInDown delay-1">
        Thanks for visiting! Check out my resume and the skills I've picked up during my journey.
      </h2>
      <div className="d-flex mb-4 justify-content-center animate__animated animate__fadeIn animate__delay-1s">
        {/* button for downloading resume */}
        <a 
          href="https://drive.google.com/file/d/1r3HfYnQr1qtijQ7Kv8SudnAkat5uMETE/view?usp=sharing" 
          className="btn btn-outline-info btn-lg fw-bold rounded-pill"
        >
          Download resume
        </a>
      </div>
      <div className="d-flex mb-4 flex-column flex-md-row justify-content-evenly align-items-center align-items-md-start animate__animated animate__fadeIn animate__delay-1s">
        {/* card for displaying front-end skills */}
        <div className="card shadow skill-card mb-4">
          <div className="card-header bg-dark py-3">
            <h2 class="text-center fs-4 fw-bold mb-0">
              Front-end Proficiencies
            </h2>
          </div>
          <ul className="list-group list-group-flush text-center">
            {/* map array of front-end skills */}
            {frontEndSkills.map(skill => (
              <li 
                key={skill}
                className="list-group-item custom-text-color body-text"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* card for displaying back-end skills */}
        <div className="card shadow skill-card">
          <div className="card-header bg-dark py-3">
            <h2 class="text-center fs-4 fw-bold mb-0">
              Back-end Proficiencies
            </h2>
          </div>
          <ul className="list-group list-group-flush text-center">
            {/* map array of back-end skills */}
            {backEndSkills.map(skill => (
              <li 
                key={skill}
                className="list-group-item custom-text-color body-text"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
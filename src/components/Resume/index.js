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
    <section id="resume" className="mx-4 mx-sm-5 py-3 text-white">
      <h2 className="section-title">
        Resume
      </h2>
      <div className="mt-5 fs-5">
        Download my <span>
          <a 
            href="/" 
            className="text-decoration-none"
          >
            resume
          </a>
        </span>
      </div>
      <div className="row g-4 my-3">
        <div className="col">
          <div className="border rounded">
            <h3 className="fs-5 py-3 px-2 text-center border-bottom">
              Front-end Proficiencies
            </h3>
            <ul className="fs-5">
              {frontEndSkills.map(skill => (
                <li key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="border rounded">
            <h3 className="fs-5 py-3 px-2 text-center border-bottom">
              Back-end Proficiencies
            </h3>
            <ul className="fs-5">
              {backEndSkills.map(skill => (
                <li key={skill}>
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
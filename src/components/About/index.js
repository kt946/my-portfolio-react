import React from 'react';
import portraitPhoto from '../../assets/images/portrait.png';

function About() {
  return(
    // section for About component
    <section id="about" className="text-white">
      {/* Landing page */}
      <div className="hero text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className="px-2 display-6">
          <span className="animate__animated animate__fadeInDown delay-1">
            Hello world! I'm
          </span>
          <br />
          <span className="brand animate__animated animate__fadeInLeft delay-2">
            Kyle
          </span>
          &nbsp;
          <span className="brand animate__animated animate__fadeInRight delay-2">
            Tang
          </span>
          <br />
          <span className="brand animate__animated animate__fadeInUp delay-3">
            Full-Stack Web Developer
          </span>
        </h1>
      </div>
      {/* About me section */}
      <section className="container py-4 text-white custom-height">
        <h2 className="section-title text-center border-bottom border-3 pb-2 mb-4 animate__animated animate__fadeIn">
          About Me
        </h2>
        <h3 className="fs-4 fw-bold text-center mb-4 animate__animated animate__fadeInDown delay-1">
          Who am I? You sure you want to know?
        </h3>
        <div className="d-flex flex-column flex-lg-row fs-5 animate__animated animate__fadeIn animate__delay-1s">
          {/* Portrait */}
          <div className="text-center mb-4">
            <img 
              src={portraitPhoto}
              alt="Portrait of Kyle"
              className="portrait-image shadow border border-5 border-info"
            />
          </div>
          {/* Bio */}
          <div className="ms-0 ms-md-5 custom-fs custom-text-color body-text">
            <p>
              Hi everyone! My name is Kyle Tang and I'm a full stack web developer with a B.A. in Psychology from Rutgers University and a passion for technology, creativity, and learning.
              I've completed a certificate in Full Stack Web Development from the Rutgers Coding Bootcamp.
              As a versatile quick learner and problem-solver, I'm able to collaborate with teams to develop projects with simple, elegant designs and robust databases. 
              I'm eager to demonstrate my newly acquired skills and build innovative applications that help me grow as a developer and provide users with immersive web experiences.
            </p>
            <p>
              When I'm not coding on my laptop, skimming through documentation, or searching Google for solutions to various issues and the meaning of life, 
              I enjoy cooking, exercising, video games, playing guitar, and learning new skills and languages. 
            </p>
            <p>
              Check out my projects and contact information. I'm happy to connect with you! 
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
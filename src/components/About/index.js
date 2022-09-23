import React from 'react';
import portraitPhoto from '../../assets/images/portrait.png';

function About() {
  return(
    <section id="about" className="text-white">
      <div className="hero d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center mx-4 animate__animated animate__fadeIn">
          Hello world! I'm Kyle Tang.
        </h2>
        <p className="fs-1 text-center animate__animated animate__fadeInDown animate__delay-1s">
          A Full-Stack Web Developer.
        </p>
      </div>
      <section className="py-4 custom-bg-color text-black custom-height">
        <div className="container">
          <h2 className="section-title text-center border-bottom border-3 pb-2 mb-4 animate__animated animate__fadeIn animate__faster">
            About Me
          </h2>
          <p className="fs-4 text-center mb-4 cm-font-heading animate__animated animate__fadeInDown">
            Who am I? You sure you want to know?
          </p>
          <div className="d-flex flex-column flex-md-row fs-5 animate__animated animate__fadeIn animate__delay-1s">
            <div className="text-center mb-4">
              <img 
                src={portraitPhoto}
                alt="portrait"
                className="portrait-image shadow border border-5"
              />
            </div>
            <div className="ms-0 ms-md-5 custom-fs">
              <p>
                I'm a full stack web developer with a B.A. in Psychology from Rutgers University and a passion for technology, creativity, and learning.
                I'm pursuing a certificate in Full Stack Web Development from the Rutgers Coding Bootcamp.
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
        </div>
      </section>
    </section>
  );
}

export default About;
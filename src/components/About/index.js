import React from 'react';
import portraitPhoto from '../../assets/images/portrait.png';

function About() {
  return(
    <section id="about" className="text-white">
      <div className="hero d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center mx-4">
          Hello world! I'm Kyle Tang.
        </h2>
        <p className="fs-1 text-center">
          A Full-Stack Web Developer.
        </p>
      </div>
      <section className="py-4 custom-bg-color text-black">
        <div className="container  pb-4">
          <h2 className="section-title text-center border-bottom border-primary border-2 pb-2 mb-4">
            About Me
          </h2>
          <div className="d-flex flex-column flex-md-row fs-5">
            <div className="text-center mb-4">
              <img 
                src={portraitPhoto}
                alt="portrait"
                className="portrait-image"
              />
            </div>
            <div className="ms-0 ms-md-5 custom-fs">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio exercitationem quo suscipit recusandae natus totam doloremque, hic vel, animi fugit nemo itaque sunt voluptatibus consequatur. Porro possimus repellendus debitis vel.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci ipsam facere ex rerum sed dolores repellendus rem culpa nulla veniam quam numquam sunt tempora quia, praesentium quaerat dolorem consequatur.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consectetur dignissimos explicabo natus, blanditiis, omnis beatae illum quis aperiam ad quas veritatis amet aut alias culpa, dicta aliquid est! Amet!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta atque earum accusamus nam molestiae autem excepturi error maxime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
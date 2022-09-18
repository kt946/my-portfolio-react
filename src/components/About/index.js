import React from 'react';

function About() {
  return(
    <section id="about" className="text-white">
      <div className="hero p-5 d-flex flex-column justify-content-center align-items-center">
        <h2>
          Hello World! I'm Kyle Tang, 
        </h2>
        <p className="fs-1">
          a Full-Stack Web Developer
        </p>
      </div>
      <div className="mx-4 mx-sm-5 py-3">
        <h2 className="section-title">
          About Me
        </h2>
        <div className="fs-5">
          <p >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio exercitationem quo suscipit recusandae natus totam doloremque, hic vel, animi fugit nemo itaque sunt voluptatibus consequatur. Porro possimus repellendus debitis vel.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci ipsam facere ex rerum sed dolores repellendus rem culpa nulla veniam quam numquam sunt tempora quia, praesentium quaerat dolorem consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consectetur dignissimos explicabo natus, blanditiis, omnis beatae illum quis aperiam ad quas veritatis amet aut alias culpa, dicta aliquid est! Amet!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
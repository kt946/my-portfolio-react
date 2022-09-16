import React from 'react';
import Project from '../Project';

function Portfolio() {
  return(
    <section id="Portfolio" className='mx-5 py-3 text-white'>
      <h2 className='section-title'>
        Portfolio
      </h2>
      <Project></Project>
    </section>
  );
}

export default Portfolio;
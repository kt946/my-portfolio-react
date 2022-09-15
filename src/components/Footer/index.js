import React from 'react';

const categories = [
  {
    name: 'GitHub',
    class: 'bi bi-github',
    link: '/'
  },
  {
    name: 'LinkedIn',
    class: 'bi bi-linkedin',
    link: '/'
  },
  {
    name: 'Stack Overflow',
    class: 'bi bi-stack-overflow',
    link: '/'
  },
];

function Footer() {
  return(
    <section 
      id="footer" 
      className='text-bg-dark d-flex justify-content-center p-2'
    >
      <div className='fs-1'>
        {categories.map((category) => (
          <a 
            href={category.link}
            className='mx-4 text-white'
            key={category.name}
          >
            <i class={category.class}></i>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Footer;
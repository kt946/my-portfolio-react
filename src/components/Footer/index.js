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
      className="text-bg-dark"
    >
      <ul className="fs-1 nav justify-content-center">
        {categories.map((category) => (
          <li 
            className="nav-item"
            key={category.name}
          >
            <a 
              href={category.link}
              className="mx-2 nav-link"
            >
              <i class={category.class}></i>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Footer;
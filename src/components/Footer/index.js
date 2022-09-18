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
    <footer 
      id="footer" 
    >
      <ul className="fs-2 nav justify-content-center">
        {categories.map((category) => (
          <li 
            className="nav-item"
            key={category.name}
          >
            <a 
              href={category.link}
              className="p-1 mx-3 nav-link"
            >
              <i class={category.class}></i>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
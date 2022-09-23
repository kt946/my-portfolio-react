import React from 'react';

const footerLinks = [
  {
    name: 'Email',
    symbol: 'bi bi-envelope-fill',
    link: 'mailto:ktang1151@gmail.com'
  },
  {
    name: 'GitHub',
    symbol: 'bi bi-github',
    link: 'https://github.com/kt946'
  },
  {
    name: 'LinkedIn',
    symbol: 'bi bi-linkedin',
    link: 'https://www.linkedin.com/in/kyle-tang-'
  },
  {
    name: 'Stack Oveflow',
    symbol: 'bi bi-stack-overflow',
    link: 'https://stackoverflow.com/users/18778631/ktang'
  },
];

function Footer() {
  return(
    <footer id="footer" className="bg-black d-flex flex-column justify-content-center text-white">
      <ul className="fs-2 nav justify-content-center">
        {footerLinks.map((footerLink) => (
          <li 
            className="nav-item"
            key={footerLink.name}
          >
            <a 
              href={footerLink.link}
              className="p-1 mx-3 nav-link"
            >
              <i className={footerLink.symbol}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-center">
        &copy; 2022 Kyle Tang
      </p>
    </footer>
  );
}

export default Footer;
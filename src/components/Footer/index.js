import React from 'react';

const footerLinks = [
  {
    name: 'Email',
    symbol: 'bi bi-envelope-fill',
    link: '/'
  },
  {
    name: 'GitHub',
    symbol: 'bi bi-github',
    link: '/'
  },
  {
    name: 'LinkedIn',
    symbol: 'bi bi-linkedin',
    link: '/'
  },
  {
    name: 'Stack Overflow',
    symbol: 'bi bi-stack-overflow',
    link: '/'
  },
];

function Footer() {
  return(
    <footer id="footer">
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
    </footer>
  );
}

export default Footer;
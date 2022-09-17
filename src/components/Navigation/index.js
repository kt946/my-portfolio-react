import React from 'react';

function Navigation(props) {
  const {
    categories = [],
    currentPage,
    handlePageChange
  } = props;

  return(
    <nav id="nav" className="navbar fs-4">
      <ul className="nav justify-content-end">
        {categories.map((category) => (
          <li 
            className="nav-item"
            key={category.name}
          >
            <a
              href={`#${category.id}`}
              onClick={() => handlePageChange(category.name)}
              className={`nav-link ${currentPage === category.name && "text-info"}`}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
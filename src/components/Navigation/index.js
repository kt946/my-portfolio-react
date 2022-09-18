import React from 'react';

function Navigation(props) {
  const {
    categories = [],
    currentPage,
    handlePageChange
  } = props;

  return(
    <nav id="nav" className="navbar fs-5">
      <ul className="nav justify-content-end">
        {categories.map((category) => (
          <li 
            className="nav-item"
            key={category.name}
          >
            <a
              href={`#${category.id}`}
              onClick={() => handlePageChange(category.name)}
              className={`nav-link p-1 mx-2 ${currentPage === category.name && "text-white"}`}
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
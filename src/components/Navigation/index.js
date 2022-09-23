import React from 'react';

function Navigation(props) {
  const {
    categories = [],
    currentPage,
    handlePageChange
  } = props;

  return(
    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
      <ul className="navbar-nav">
        {categories.map((category) => (
          <li 
            className="nav-item fs-5 d-flex justify-content-end"
            key={category.name}
          >
            <a
              href={`#${category.id}`}
              onClick={() => handlePageChange(category.name)}
              className={`nav-link p-1 mx-3 ${currentPage === category.name && "text-white"}`}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
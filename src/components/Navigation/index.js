import React from 'react';

function Navigation(props) {
  // destructure categores, currentPage, handlePageChange function from props
  const {
    categories = [],
    currentPage,
    handlePageChange
  } = props;

  return(
    // section for Navigation component with categories
    <div className="collapse navbar-collapse justify-content-end" id="mobile-menu">
      <ul className="navbar-nav">
        {/* map array of categories from props */}
        {categories.map((category) => (
          <li 
            className="nav-item fs-5 d-flex justify-content-end"
            key={category.name}
          >
            <a
              href={`#${category.id}`}
              onClick={() => handlePageChange(category.name)}
              // highlight current page
              className={`nav-link p-1 mx-0 mx-lg-2 ${currentPage === category.name && "navActive"}`}
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